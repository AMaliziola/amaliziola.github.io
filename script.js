document.addEventListener('DOMContentLoaded', () => {
    const dialog = document.getElementById('dialog');
    const closeBtn = document.getElementById('close-dialog');
    const documentationBtn = document.getElementById('documentation-btn');
    const sourcecodeBtn = document.getElementById('sourcecode-btn');
    let currentProject = null;

    const projectLinks = {
        1: {
            documentation: 'https://docs.google.com/document/d/1NFg2_1X0lsAy_qRDhNyk6lcxtxBhPvKlntXFOtWWhFw/edit?usp=sharing',
            sourcecode: 'https://github.com/423s24/Group_1'
        },
        2: {
            documentation: 'https://docs.google.com/document/d/1MenIdfrGSUFZCMRGRP645OEfGwlyi3yWIMQBWmm-Clk/edit?usp=sharing',
            sourcecode: 'https://docs.google.com/document/d/1MenIdfrGSUFZCMRGRP645OEfGwlyi3yWIMQBWmm-Clk/edit?usp=sharing'
        },
        3: {
            documentation: 'https://github.com/alex-maliziola/CSCI-455-Group-31',
            sourcecode: 'https://github.com/alex-maliziola/CSCI-455-Group-31'
        },
        4: {
            documentation: 'https://github.com/alex-maliziola/final_tailwind',
            sourcecode: 'https://github.com/alex-maliziola/final_tailwind'
        },
        5: {
            documentation: 'https://example.com/portfolio-docs',
            sourcecode: 'https://github.com/alexander-maliziola/portfolio-website'
        }
    };

    function showDialog(project) {
        currentProject = project;
        dialog.style.display = 'flex';
    }

    function hideDialog() {
        dialog.style.display = 'none';
    }

    document.querySelectorAll('.grid-item.open-dialog').forEach(item => {
        item.addEventListener('click', () => {
            const project = item.getAttribute('data-project');
            showDialog(project);
        });
    });

    document.querySelectorAll('.grid-item:not(.open-dialog)').forEach(item => {
        item.addEventListener('click', () => {
            const project = item.getAttribute('data-project');
            if (projectLinks[project] && projectLinks[project].sourcecode) {
                window.open(projectLinks[project].sourcecode, '_blank');
            }
        });
    });

    dialog.addEventListener('click', (e) => {
        if (e.target === dialog) {
            hideDialog();
        }
    });

    documentationBtn.addEventListener('click', () => {
        if (currentProject && projectLinks[currentProject]) {
            window.open(projectLinks[currentProject].documentation, '_blank');
        }
    });

    sourcecodeBtn.addEventListener('click', () => {
        if (currentProject && projectLinks[currentProject]) {
            window.open(projectLinks[currentProject].sourcecode, '_blank');
        }
    });
});