import emailjs from '@emailjs/browser';

// EmailJS configuration
const SERVICE_ID = 'service_tpdtz65';
const BUSINESS_TEMPLATE_ID = 'template_5vczxry';
const PUBLIC_KEY = 'V9TBg_rVMhia2MeaF';

// Email recipient
export const EMAIL_RECIPIENT = 'admin@itassetsolutions.com';

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(PUBLIC_KEY);
};

// Send email using EmailJS
export const sendEmail = async (templateParams: Record<string, unknown>): Promise<boolean> => {
  try {
    const templateId = BUSINESS_TEMPLATE_ID;
    const response = await emailjs.send(SERVICE_ID, templateId, templateParams);
    console.log('Email sent successfully to', EMAIL_RECIPIENT);
    return true;
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    return false;
  }
};

// Format form data for different form types
export const formatBusinessFormData = (formData: any) => {
  return {
    form_type: 'Business ITAD Service Inquiry',
    full_name: formData.full_name,
    company_name: formData.company_name,
    email: formData.email,
    phone_number: formData.phone_number,
    address: formData.address,
    city: formData.city,
    state_province: formData.state_province,
    zip_postal_code: formData.zip_postal_code,
    country: formData.country,
    service_of_interest: formData.service_of_interest,
    project_details: formData.project_details,
    how_did_you_find_us: formData.how_did_you_find_us,
    to_email: EMAIL_RECIPIENT,
    from_name: formData.full_name || 'Website Visitor',
    reply_to: formData.email || EMAIL_RECIPIENT
  };
};

export const formatWholesaleFormData = (formData: any) => {
  return {
  }
}

export const formatInventoryInquiryData = (formData: any) => {
  return {
    form_type: 'Inventory Inquiry Request',
    name: formData.fullName,
    company: formData.companyName,
    email: formData.email,
    phone: formData.phone,
    message: `Equipment Type: ${formData.equipmentType}\nQuantity: ${formData.quantity}\nModels: ${formData.specificModels}`,
    subject: `New Inventory Inquiry from ${formData.companyName}`
  };
};

export const formatContactFormData = (formData: any) => {
  return {
    form_type: 'General Contact Inquiry',
    full_name: formData.full_name,
    company_name: formData.company_name || 'Not provided',
    email: formData.email,
    phone_number: formData.phone_number || 'Not provided',
    subject: formData.how_can_we_help,
    message: formData.message,
    to_email: EMAIL_RECIPIENT,
    from_name: formData.full_name,
    reply_to: formData.email
  };
};