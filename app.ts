(function() {
    const editForm = document.getElementById('editForm') as HTMLDivElement;
    const resumeDisplay = document.getElementById('resumeDisplay') as HTMLDivElement;
    const editResumeBtn = document.getElementById('editResume') as HTMLButtonElement;
    const saveChangesBtn = document.getElementById('saveChanges') as HTMLButtonElement;
    const cancelEditBtn = document.getElementById('cancelEdit') as HTMLButtonElement;

    const editName = document.getElementById('editName') as HTMLInputElement;
    const editEmail = document.getElementById('editEmail') as HTMLInputElement;
    const editPhone = document.getElementById('editPhone') as HTMLInputElement;
    const editEducation = document.getElementById('editEducation') as HTMLTextAreaElement;
    const editSkills = document.getElementById('editSkills') as HTMLTextAreaElement;
    const editWorkExperience = document.getElementById('editWorkExperience') as HTMLTextAreaElement;
    const editProjects = document.getElementById('editProjects') as HTMLTextAreaElement;
    const editContact = document.getElementById('editContact') as HTMLTextAreaElement;
    const editImage = document.getElementById('editImage') as HTMLInputElement; 

    const nameDisplay = document.getElementById('name') as HTMLElement;
    const emailDisplay = document.getElementById('email') as HTMLElement;
    const phoneDisplay = document.getElementById('phone') as HTMLElement;
    const educationDisplay = document.getElementById('education') as HTMLElement;
    const skillsDisplay = document.getElementById('skills') as HTMLElement;
    const workexperienceDisplay = document.getElementById('workexperience') as HTMLElement;
    const projectsDisplay = document.getElementById('projects') as HTMLElement;
    const contactDisplay = document.getElementById('contact') as HTMLElement;
    const profilePicDisplay = document.getElementById('profilePic') as HTMLImageElement; 

    editResumeBtn.addEventListener('click', () => {
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

    saveChangesBtn.addEventListener('click', () => {
        nameDisplay.textContent = editName.value;
        emailDisplay.textContent = editEmail.value;
        phoneDisplay.textContent = editPhone.value;
        educationDisplay.textContent = editEducation.value;
        skillsDisplay.textContent = editSkills.value;
        workexperienceDisplay.textContent = editWorkExperience.value;
        projectsDisplay.textContent = editProjects.value;
        contactDisplay.textContent = editContact.value;

        const reader = new FileReader();
        reader.onload = function(e) {
            profilePicDisplay.src = e.target!.result as string;
        };
        if (editImage.files && editImage.files[0]) {
            reader.readAsDataURL(editImage.files[0]);
        }

        editForm.classList.add('hidden');
        resumeDisplay.classList.remove('hidden');
    });

    cancelEditBtn.addEventListener('click', () => {
        editForm.classList.add('hidden');
        resumeDisplay.classList.remove('hidden');
    });
})();
