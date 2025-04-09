// Scroll to top functionality for scroll-up button
document.getElementById("scrollUpBtn").addEventListener("click", function() {
    let scrollPosition = window.pageYOffset; // Get the current scroll position
    let scrollStep = 50; // How many pixels to scroll each time (lower for slower scroll)
    let scrollInterval = 16; // Interval in ms (higher for slower scroll)

    // Use requestAnimationFrame for smoother scrolling
    function scrollUp() {
        if (scrollPosition > 0) {
            window.scrollTo(0, scrollPosition); // Scroll up by the calculated step
            scrollPosition -= scrollStep; // Decrease the scroll position
            requestAnimationFrame(scrollUp); // Call scrollUp again for the next frame
        } else {
            window.scrollTo(0, 0); // Ensure it's exactly at the top
        }
    }

    requestAnimationFrame(scrollUp); // Start the scrolling
});

document.addEventListener("DOMContentLoaded", function() {
    const whatsappBtn = document.getElementById("whatsappBtn");
    
    // FAQ list with answers
    const faq = [
        { question: "What is your business about?", answer: "We offer personalized safari experiences across Kenya, including guided tours, wildlife watching, and cultural encounters." },
        { question: "What are your working hours?", answer: "Our office is open from Monday to Friday, 9 AM to 5 PM. However, we are available for inquiries via WhatsApp 24/7." },
        { question: "How can I book a safari?", answer: "You can book a safari through our website, by calling our office, or directly via WhatsApp." },
        { question: "What types of safaris do you offer?", answer: "We offer game drives, walking safaris, and specialized safaris like the Big Five, the Great Migration, and bird watching." },
        { question: "Can I customize my tour?", answer: "Yes! We offer customized itineraries based on your preferences. Just let us know your interests and budget, and we'll tailor a safari for you." },
        { question: "Do you offer family discounts?", answer: "Yes, we offer special discounts for family bookings. Contact us for more details on pricing." },
        { question: "What is the booking process?", answer: "To book, simply choose your safari package, fill in the details on our website, and we will confirm your booking along with payment instructions." }
    ];

    // Function to generate FAQ message with answers
    function generateFaqMessage() {
        let message = "Hello, I have some questions:\n\n";
        faq.forEach((faqItem, index) => {
            message += `${index + 1}. ${faqItem.question}\n`;
            message += `   Answer: ${faqItem.answer}\n\n`;  // Adding the answer to each FAQ
        });
        return message;
    }

    // When the WhatsApp button is clicked, open WhatsApp with the FAQ message
    whatsappBtn.addEventListener("click", function() {
        const phoneNumber = "+254721548016"; // Replace with your phone number
        const message = generateFaqMessage(); // Get the FAQ message with answers
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, '_blank');
    });
});
