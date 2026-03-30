// 1. PROJECT CONSTANTS - Connecting JS to your HTML elements
const textArea = document.querySelector('textarea');
const checkBtn = document.getElementById('check-btn');
const readabilityVal = document.getElementById('readability-val');
const wordCountDisplay = document.getElementById('word-count');

// 2. THE ANALYZE FUNCTION - This runs when you click the button
checkBtn.addEventListener('click', () => {
    const text = textArea.value.trim();

    // Prevent running if the box is empty
    if (text.length === 0) {
        alert("Paste some AI text first!");
        return;
    }

    // 3. LOGIC: Count words
    const words = text.split(/\s+/).filter(w => w.length > 0);
    const wordCount = words.length;

    // 4. LOGIC: Count sentences
    const sentences = text.split(/[.!?]+/).filter(s => s.length > 0).length || 1;

    // 5. CALCULATION: A basic readability formula
    // (Fewer words per sentence = higher/easier score)
    let score = 100 - ((wordCount / sentences) * 2);
    score = Math.max(0, Math.min(100, Math.round(score)));

    // 6. UPDATE UI: Show the results on the dashboard
    readabilityVal.innerText = score + "%";
    
    if (wordCountDisplay) {
        wordCountDisplay.innerText = "Words: " + wordCount;
    }

    // 7. FEEDBACK: Change colors based on quality
    if (score > 70) {
        readabilityVal.style.color = "#4ade80"; // Neon Green
    } else if (score > 40) {
        readabilityVal.style.color = "#fbbf24"; // Amber
    } else {
        readabilityVal.style.color = "#f87171"; // Soft Red
    }

    console.log("Analysis Complete. Score:", score);
});