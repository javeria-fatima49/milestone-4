(function () {
    var editForm = document.getElementById('editForm');
    var resumeDisplay = document.getElementById('resumeDisplay');
    var editResumeBtn = document.getElementById('editResume');
    var saveChangesBtn = document.getElementById('saveChanges');
    var cancelEditBtn = document.getElementById('cancelEdit');
    var editName = document.getElementById('editName');
    var editEmail = document.getElementById('editEmail');
    var editPhone = document.getElementById('editPhone');
    var editEducation = document.getElementById('editEducation');
    var editSkills = document.getElementById('editSkills');
    var editWorkExperience = document.getElementById('editWorkExperience');
    var editProjects = document.getElementById('editProjects');
    var editContact = document.getElementById('editContact');
    var editImage = document.getElementById('editImage');
    var nameDisplay = document.getElementById('name');
    var emailDisplay = document.getElementById('email');
    var phoneDisplay = document.getElementById('phone');
    var educationDisplay = document.getElementById('education');
    var skillsDisplay = document.getElementById('skills');
    var workexperienceDisplay = document.getElementById('workexperience');
    var projectsDisplay = document.getElementById('projects');
    var contactDisplay = document.getElementById('contact');
    var profilePicDisplay = document.getElementById('profilePic');
    editResumeBtn.addEventListener('click', function () {
        editForm.classList.remove('hidden');
        resumeDisplay.classList.add('hidden');
        editName.value = nameDisplay.textContent || '';
        editEmail.value = emailDisplay.textContent || '';
        editPhone.value = phoneDisplay.textContent || '';
        editEducation.value = educationDisplay.textContent || '';
        editSkills.value = skillsDisplay.textContent || '';
        editWorkExperience.value = workexperienceDisplay.textContent || '';
        editProjects.value = projectsDisplay.textContent || '';
        editContact.value = contactDisplay.textContent || '';
    });
    saveChangesBtn.addEventListener('click', function () {
        nameDisplay.textContent = editName.value;
        emailDisplay.textContent = editEmail.value;
        phoneDisplay.textContent = editPhone.value;
        educationDisplay.textContent = editEducation.value;
        skillsDisplay.textContent = editSkills.value;
        workexperienceDisplay.textContent = editWorkExperience.value;
        projectsDisplay.textContent = editProjects.value;
        contactDisplay.textContent = editContact.value;
        var reader = new FileReader();
        reader.onload = function (e) {
            profilePicDisplay.src = e.target.result;
        };
        if (editImage.files && editImage.files[0]) {
            reader.readAsDataURL(editImage.files[0]);
        }
        editForm.classList.add('hidden');
        resumeDisplay.classList.remove('hidden');
    });
    cancelEditBtn.addEventListener('click', function () {
        editForm.classList.add('hidden');
        resumeDisplay.classList.remove('hidden');
    });
})();
