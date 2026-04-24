import PDFDocument from 'pdfkit';
import fs from 'fs';

const doc = new PDFDocument({ size: 'A4', margin: 50 });
const output = fs.createWriteStream('public/libro.pdf');

doc.pipe(output);

doc.fontSize(24).fillColor('#2c3e50').text('Catálogo de Productos', { align: 'center' });
doc.moveDown(0.5);
doc.fontSize(16).fillColor('#7f8c8d').text('Artesanos del Hogar', { align: 'center' });
doc.moveDown();

doc.fontSize(12).fillColor('#333');
doc.text('___________________________________________________');
doc.moveDown();

doc.fontSize(18).fillColor('#2c3e50').text('Muebles de Sala');
doc.moveDown(0.5);
doc.fontSize(12).fillColor('#333');
doc.text('• Sofá Classic - Sofá de 3 plazas en tela premium........$1,299');
doc.text('• Poltrona Comfort - Sillón reclinable en cuero.......$699');
doc.text('• Mesa Centro Nogal - Mesa de centro en madera..........$449');
doc.moveDown();

doc.fontSize(18).fillColor('#2c3e50').text('Dormitorio');
doc.moveDown(0.5);
doc.fontSize(12).fillColor('#333');
doc.text('• Cama King Premium - Cama king con cabecero..........$1,899');
doc.text('• Comoda Vintage - Comoda de 6 cajones en nogal.........$599');
doc.text('• Mesita Noche - Mesita con cajón y puerta...........$249');
doc.moveDown();

doc.fontSize(18).fillColor('#2c3e50').text('Comedor');
doc.moveDown(0.5);
doc.fontSize(12).fillColor('#333');
doc.text('• Mesa Royal - Mesa extensible para 8 personas........$1,499');
doc.text('• Silla Senator - Silla de comedor en madera........$299');
doc.text('• Vitrina Glass - Vitrina con cristal yillage.........$799');
doc.moveDown(2);

doc.fontSize(10).fillColor('#7f8c8d').text('© 2025 Artesanos del Hogar S.A. - Todos los derechos reservados', { align: 'center' });
doc.fontSize(10).fillColor('#3498db').text('www.artesanosdelhogar.com', { align: 'center' });

doc.end();
output.on('finish', () => console.log('PDF creado exitosamente'));
