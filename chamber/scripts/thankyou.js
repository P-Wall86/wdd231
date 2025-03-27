document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    console.log('Form data received:', Object.fromEntries(params.entries()));
    
    const formData = {
        firstname: params.get('firstname') || 'Not provided',
        lastname: params.get('lastname') || '',
        email: params.get('email') || 'Not provided',
        phone: params.get('phone') || 'Not provided',
        orgname: params.get('orgname') || 'Not provided',
        membership: params.get('membership') || 'Not selected'
    };
    
    const membershipNames = {
        np: "Non-Profit",
        bronze: "Bronze", 
        silver: "Silver",
        gold: "Gold"
    };
    
    const displayHTML = `
        <div class="data-row">
            <strong>Name:</strong> ${formData.firstname} ${formData.lastname}
        </div>
        <div class="data-row">
            <strong>Email:</strong> ${formData.email}
        </div>
        <div class="data-row">
            <strong>Phone:</strong> ${formData.phone}
        </div>
        <div class="data-row">
            <strong>Organization:</strong> ${formData.orgname}
        </div>
        <div class="data-row">
            <strong>Membership Level:</strong> ${membershipNames[formData.membership] || formData.membership}
        </div>
    `;

    const formDataElement = document.getElementById('form-data');
    if (formDataElement) {
        formDataElement.innerHTML = displayHTML;
    } else {
        console.error('Form data display element not found');
    }
});