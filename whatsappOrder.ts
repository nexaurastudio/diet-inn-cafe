import { CartItem, CustomerDetails } from '../types';
import { WHATSAPP_NUMBER } from '../data/menuData';

export const generateWhatsAppOrderMessage = (
  cart: CartItem[],
  details: CustomerDetails,
  subtotal: number,
  total: number
): string => {
  const orderLines = cart.map(item => {
    const itemTotal = item.unitPrice * item.quantity;
    const optionText = item.selectedOption ? ` (${item.selectedOption.label})` : '';
    let line = `• ${item.quantity}x ${item.name}${optionText} - Rs. ${itemTotal}`;
    
    if (item.selectedExtras && item.selectedExtras.length > 0) {
      const extrasList = item.selectedExtras
        .map(ext => `    + ${ext.name} (Rs. ${ext.price})`)
        .join('\n');
      line += `\n${extrasList}`;
    }
    return line;
  }).join('\n');

  const addressSection = details.orderType === 'DELIVERY'
    ? `\nAddress:\n${details.address.trim()}\n`
    : '';

  const notesSection = details.notes && details.notes.trim()
    ? `\nNotes:\n${details.notes.trim()}\n`
    : '';

  return `NEW DIET INN ORDER

Customer: ${details.name.trim()}
Phone: ${details.phone.trim()}

Order Type: ${details.orderType === 'DELIVERY' ? 'Delivery' : 'Pickup'}
${addressSection}
ORDER:
${orderLines}

Subtotal: Rs. ${subtotal}
Total: Rs. ${total}
${notesSection}`.trim();
};

export const generateWhatsAppOrderUrl = (
  cart: CartItem[],
  details: CustomerDetails,
  subtotal: number,
  total: number
): string => {
  const message = generateWhatsAppOrderMessage(cart, details, subtotal, total);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

