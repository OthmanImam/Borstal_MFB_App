// src/utils/DownloadFunction.js

import jsPDF from 'jspdf';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx'; // Correctly importing xlsx

// Function to download PDF
export const downloadPDF = (data, fileName) => {
  const doc = new jsPDF();
  data.forEach((item, index) => {
    doc.text(`${index + 1}. ${JSON.stringify(item)}`, 10, 10 + (index * 10));
  });
  doc.save(`${fileName}.pdf`);
};

// Function to download Excel
export const downloadExcel = (data, fileName) => {
  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
  XLSX.writeFile(wb, `${fileName}.xlsx`);
};

// Function to download image (placeholder)
export const downloadImage = (fileName) => {
  // Implement your image download logic here
  const imgUrl = "your-image-url"; // Replace with actual URL
  saveAs(imgUrl, `${fileName}.png`);
};
