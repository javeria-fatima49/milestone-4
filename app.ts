(function() {
    
    const editForm = document.getElementById('editForm') as HTMLDivElement;
    const resumeDisplay = document.getElementById('resumeDisplay') as HTMLDivElement;
    const editResumeBtn = document.getElementById('editResume') as HTMLButtonElement;
    const saveChangesBtn = document.getElementById('saveChanges') as HTMLButtonElement;
    const cancelEditBtn = document.getElementById('cancelEdit') as HTMLButtonElement;

    const editName = document.getElementById('editName') as HTMLInputElement;
    const editEmail = document.getElementById('editEmail') as HTMLInputElement;
    const editEducation = document.getElementById('editEducation') as HTMLTextAreaElement;
    const editSkills = document.getElementById('editSkills') as HTMLTextAreaElement;

    const nameDisplay = document.getElementById('name') as HTMLElement;
    const emailDisplay = document.getElementById('email') as HTMLElement;
    const educationDisplay = document.getElementById('education') as HTMLElement;
    const skillsDisplay = document.getElementById('skills') as HTMLElement;

    editResumeBtn.addEventListener('click', () => {
        editForm.classList.remove('hidden');
        resumeDisplay.classList.add('hidden');
    
        editName.value = nameDisplay.textContent || '';
        editEmail.value = emailDisplay.textContent || '';
        editEducation.value = educationDisplay.textContent || '';
        editSkills.value = skillsDisplay.textContent || '';
    });

    saveChangesBtn.addEventListener('click', () => {
        nameDisplay.textContent = editName.value;
        emailDisplay.textContent = editEmail.value;
        educationDisplay.textContent = editEducation.value;
        skillsDisplay.textContent = editSkills.value;

        editForm.classList.add('hidden');
        resumeDisplay.classList.remove('hidden');
    });

    cancelEditBtn.addEventListener('click', () => {
        editForm.classList.add('hidden');
        resumeDisplay.classList.remove('hidden');
    });
})();
