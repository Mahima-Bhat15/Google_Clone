function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } 
    else if (input == "what does your website do") {
        return "This website presents the development of a multifaceted search engine that integrates Google-like functionalities with Google Maps and real-time weather forecasting.";

    }
    else if (input == "take me to the weather website")
    {
        window.location.href = '/index.html';
    }
    else if (input == "explain photosynthesis"){
        return  "Photosynthesis is the process in which plants convert sunlight, carbon dioxide, and water into glucose, producing oxygen as a byproduct.";}
        else if (input == "who discovered electricity"){
        return "Benjamin Franklin";}
        else if ( input=="primary colours of light"){
        return "The primary colors of light are red, green, and blue.";}
        else if ( input == "i am feeling happy in french"){
        return "In French, to express I am feeling happy, you can say: Je me sens heureux(if you're male) or Je me sens heureuse (if you're female).";}
        else if (input == "take me to ai image generator") {
        return window.location.href = '/image.html';;}
        else if (input == "tell me a joke") {
        return "Sure, here's a joke for you: Why don't scientists trust atoms? Because they make up everything!  ";}
        else if (input == " tell me another one") {
        return "Certainly! Here's another joke for you: Why did the bicycle fall over? Because it was two-tired! ";}
        else if (input == " what is your name ") {
        return "I am ChatBot, a virtual assistant. I don't have a personal name as I am a machine learning model designed to assist with information and answer questions. How can I help you today? ";}
        
        else if (input == " how old are you") {
        return "I don't have an age as I am a computer program. I don't experience the passage of time. How can I assist you today? ";}
        else if( input == " weight of ant ") {
        return "The weight of an ant can vary, but on average, an ant typically weighs between 1 to 5 milligrams. Ants are very small insects, and their weight can differ based on the species and individual size. "; }
        else if( input == " what do I gift mom ") {
        return "Consider personalized jewellery, a spa day, or a cozy blanket based on your mom's preferences. "; }
        
    else {
        return "Try asking something else!";
    }
}