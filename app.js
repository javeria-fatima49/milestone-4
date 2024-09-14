(function () {
    // Getting the DOM elements
    var editForm = document.getElementById('editForm');
    var resumeDisplay = document.getElementById('resumeDisplay');
    var editResumeBtn = document.getElementById('editResume');
    var saveChangesBtn = document.getElementById('saveChanges');
    var cancelEditBtn = document.getElementById('cancelEdit');
    // Form input fields
    var editName = document.getElementById('editName');
    var editEmail = document.getElementById('editEmail');
    var editEducation = document.getElementById('editEducation');
    var editSkills = document.getElementById('editSkills');
    // Resume display fields
    var nameDisplay = document.getElementById('name');
    var emailDisplay = document.getElementById('email');
    var educationDisplay = document.getElementById('education');
    var skillsDisplay = document.getElementById('skills');
    // Show the edit form and hide the resume
    editResumeBtn.addEventListener('click', function () {
        editForm.classList.remove('hidden');
        resumeDisplay.classList.add('hidden');
        // Populate the form with current resume data
        editName.value = nameDisplay.textContent || '';
        editEmail.value = emailDisplay.textContent || '';
        editEducation.value = educationDisplay.textContent || '';
        editSkills.value = skillsDisplay.textContent || '';
    });
    // Save changes and update the resume display
    saveChangesBtn.addEventListener('click', function () {
        // Update the resume with form data
        nameDisplay.textContent = editName.value;
        emailDisplay.textContent = editEmail.value;
        educationDisplay.textContent = editEducation.value;
        skillsDisplay.textContent = editSkills.value;
        // Hide the edit form and show the resume
        editForm.classList.add('hidden');
        resumeDisplay.classList.remove('hidden');
    });
    // Cancel editing and revert to displaying the resume
    cancelEditBtn.addEventListener('click', function () {
        editForm.classList.add('hidden');
        resumeDisplay.classList.remove('hidden');
    });
})();
