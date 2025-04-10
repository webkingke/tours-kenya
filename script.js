// Scroll to top functionality for scroll-up button
document.getElementById("scrollUpBtn").addEventListener("click", function() {
    let scrollPosition = window.pageYOffset; // Get the current scroll position
    let scrollStep = 50; // How many pixels to scroll each time (lower for slower scroll)
    let scrollInterval = 16; // Interval in ms (higher for slower scroll)

    // Use requestAnimationFrame for smoother scrolling
    function scrollUp() {
        if (scrollPosition > 0) {
            window.scrollTo(5, scrollPosition); // Scroll up by the calculated step
            scrollPosition -= scrollStep; // Decrease the scroll position
            requestAnimationFrame(scrollUp); // Call scrollUp again for the next frame
        } else {
            window.scrollTo(0, 0); // Ensure it's exactly at the top
        }
    }

    requestAnimationFrame(scrollUp); // Start the scrolling
});

document.addEventListener("DOMContentLoaded", function () {
    const whatsappBtn = document.getElementById("whatsappBtn");

    // FAQ list with answers
    const faq = [
        {
            question: "What is your business about?",
            answer: "We offer custom safari tours across Kenya, from game drives to beach escapes."
        },
        {
            question: "What are your working hours?",
            answer: "We're available Monday to Saturday, 8 AM to 6 PM (GMT+3)."
        },
        {
            question: "How can I book a safari?",
            answer: "You can book directly through our website or via WhatsApp for quick assistance."
        },
        {
            question: "What types of safaris do you offer?",
            answer: "We offer Big Five safaris, honeymoon packages, cultural tours, and more."
        },
        {
            question: "Can I customize my tour?",
            answer: "Absolutely! Just tell us your preferences and we'll create a custom itinerary."
        },
        {
            question: "Do you offer family discounts?",
            answer: "Yes, we offer family and group discounts on select packages."
        },
        {
            question: "What is the booking process?",
            answer: "Choose a tour, confirm dates, and pay a deposit. We'll guide you through everything."
        }
    ];

    // Function to generate FAQ message
    function generateFaqMessage() {
        let message = "Hello! I have a few questions:\n\n";
        faq.forEach((item, index) => {
            message += `${index + 1}. ${item.question}\n`;
            message += `   Answer: ${item.answer}\n\n`;
        });
        return message;
    }

    // Event listener for WhatsApp button
    whatsappBtn.addEventListener("click", function () {
        const phoneNumber = "254721548016"; // WhatsApp number (NO + sign)
        const message = generateFaqMessage();
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, "_blank");
    });
});
