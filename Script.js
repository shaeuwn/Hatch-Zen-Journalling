// ===========================================
// HATCH Journal - Complete JavaScript Functions
// ===========================================

// Navigation Functions
function openDiary() {
    window.location.href = 'journal_page.html';
}

function openMemory() {
    window.location.href = 'memory_page.html';
}

function uploadContent() {
    // Trigger file input click
    const fileInput = document.getElementById('upload-content') || document.getElementById('upload-content2');
    if (fileInput) {
        fileInput.click();
    }
}

// Journal Functions
function burn() {
    // Get the textarea content
    const textarea = document.querySelector('.burn-journal textarea');
    if (textarea) {
        const content = textarea.value.trim();
        
        if (content === '') {
            alert('Please write something before burning!');
            return;
        }
        
        // Here you would typically save the journal entry
        // For now, we'll just clear the textarea and show a message
        textarea.value = '';
        alert('Journal entry burned! 🔥');
    }
}

// Page Navigation Functions
function goToNextPage() {
    // This function is used across multiple pages with different destinations
    // We'll determine the destination based on the current page
    const currentPage = window.location.pathname.split('/').pop();
    
    switch(currentPage) {
        case 'action_page.html':
            window.location.href = 'rating_page.html';
            break;
        case 'rating_page.html':
            window.location.href = 'save_page.html';
            break;
        case 'save_page.html':
            window.location.href = 'home_page.html';
            break;
        case 'remedies2_page.html':
            window.location.href = 'action_page.html';
            break;
        default:
            window.location.href = 'home_page.html';
    }
}

function nextPage() {
    // Used in breathing_page.html
    window.location.href = 'remedies_page.html';
}

function redirectToNotificationPage() {
    // Used in remedies_page.html
    window.location.href = 'notification_page.html';
}

// Record/Edit Functions
function edit() {
    // Function for editing records in record_page.html
    const deleteBtn = document.getElementById('deleteRecordBtn');
    if (deleteBtn) {
        deleteBtn.style.display = deleteBtn.style.display === 'none' ? 'block' : 'none';
    }
}

// Button Interaction Functions
function setupRatingButtons() {
    // Setup rating buttons with click functionality
    const buttons = document.querySelectorAll('.Rr_BTN_1, .Rr_BTN_2, .Rr_BTN_3, .Rr_BTN_4');
    
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            // Toggle the "clicked" class on the button
            button.classList.toggle('clicked');
            
            // Remove the "clicked" class from other buttons
            buttons.forEach((btn) => {
                if (btn !== button) {
                    btn.classList.remove('clicked');
                }
            });
        });
    });
}

function setupActionButtons() {
    // Setup action buttons with click functionality
    const buttons = document.querySelectorAll('.R_BTN_1, .R_BTN_2, .R_BTN_3, .R_BTN_4');
    
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            // Toggle the "clicked" class on the button
            button.classList.toggle('clicked');
            
            // Remove the "clicked" class from other buttons
            buttons.forEach((btn) => {
                if (btn !== button) {
                    btn.classList.remove('clicked');
                }
            });
        });
    });
}

function setupWordCounter() {
    // Setup word counter for textarea in remedies2_page.html
    const thoughtsInput = document.getElementById('thoughts');
    const wordCountDisplay = document.getElementById('word-count');
    
    if (thoughtsInput && wordCountDisplay) {
        thoughtsInput.addEventListener('input', () => {
            const wordCount = thoughtsInput.value.split(/\s+/).filter(word => word.length > 0).length;
            wordCountDisplay.textContent = `${wordCount}/200 words`;
        });
    }
}

// File Upload Handler
function setupFileUpload() {
    const fileInputs = document.querySelectorAll('input[type="file"]');
    
    fileInputs.forEach(input => {
        input.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                console.log('File uploaded:', file.name);
                // You can add more file handling logic here
                alert(`File "${file.name}" uploaded successfully!`);
            }
        });
    });
}

// Initialize functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Setup file upload handlers
    setupFileUpload();
    
    // Setup word counter if on remedies2_page
    setupWordCounter();
    
    // Setup rating buttons if on rating_page
    if (document.querySelector('.Rr_BTN_1')) {
        setupRatingButtons();
    }
    
    // Setup action buttons if on action_page
    if (document.querySelector('.R_BTN_1')) {
        setupActionButtons();
    }
});

// Breathing Animation (for breathing_page.html)
function startBreathingAnimation() {
    const breathIn = document.getElementById('breath-in');
    const breathOut = document.getElementById('breath-out');
    
    if (breathIn && breathOut) {
        let isInhaling = true;
        
        setInterval(() => {
            if (isInhaling) {
                breathIn.style.opacity = '1';
                breathOut.style.opacity = '0.3';
            } else {
                breathIn.style.opacity = '0.3';
                breathOut.style.opacity = '1';
            }
            isInhaling = !isInhaling;
        }, 3000); // Change every 3 seconds
    }
}

// Start breathing animation when page loads
window.addEventListener('load', function() {
    if (window.location.pathname.includes('breathing_page.html')) {
        startBreathingAnimation();
    }
});