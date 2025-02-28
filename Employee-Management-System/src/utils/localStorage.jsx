const employees = [  
    {
        "id": 1,
        "firstName": "Aarav",
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Complete Report",
                "taskDescription": "Prepare the monthly sales report.",
                "taskDate": "2025-02-23",
                "category": "Reports",
                "active": true,
                "newTask": true,
                "completedTask": false,
                "failed": false
            },
            {
                "taskTitle": "Team Meeting",
                "taskDescription": "Attend the weekly team meeting.",
                "taskDate": "2025-02-24",
                "category": "Meetings",
                "active": true,
                "newTask": false,
                "completedTask": false,
                "failed": false
            }
        ],
        "taskCount": {
            "active": 2,
            "newTask": 1,
            "completedTask": 0,
            "failed": 0
        }
    },
    {
        "id": 2,
        "firstName": "Vihaan",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Fix Bugs",
                "taskDescription": "Resolve issues reported by QA.",
                "taskDate": "2025-02-22",
                "category": "Development",
                "active": false,
                "newTask": false,
                "completedTask": true,
                "failed": false
            },
            {
                "taskTitle": "Deploy Update",
                "taskDescription": "Push the latest update to production.",
                "taskDate": "2025-02-25",
                "category": "Deployment",
                "active": true,
                "newTask": true,
                "completedTask": false,
                "failed": false
            }
        ],
        "taskCount": {
            "active": 1,
            "newTask": 1,
            "completedTask": 1,
            "failed": 0
        }
    },
    {
        "id": 3,
        "firstName": "Ishaan",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Client Meeting",
                "taskDescription": "Discuss project requirements.",
                "taskDate": "2025-02-26",
                "category": "Client Management",
                "active": true,
                "newTask": true,
                "completedTask": false,
                "failed": false
            },
            {
                "taskTitle": "Draft Proposal",
                "taskDescription": "Write a business proposal for new clients.",
                "taskDate": "2025-02-27",
                "category": "Documentation",
                "active": false,
                "newTask": false,
                "completedTask": true,
                "failed": false
            }
        ],
        "taskCount": {
            "active": 1,
            "newTask": 1,
            "completedTask": 1,
            "failed": 0
        }
    },
    {
        "id": 4,
        "firstName": "Reyansh",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "System Upgrade",
                "taskDescription": "Upgrade server software to latest version.",
                "taskDate": "2025-02-28",
                "category": "IT Maintenance",
                "active": true,
                "newTask": false,
                "completedTask": false,
                "failed": true
            },
            {
                "taskTitle": "Security Audit",
                "taskDescription": "Conduct a security audit for the system.",
                "taskDate": "2025-03-01",
                "category": "Security",
                "active": true,
                "newTask": true,
                "completedTask": false,
                "failed": false
            }
        ],
        "taskCount": {
            "active": 2,
            "newTask": 1,
            "completedTask": 0,
            "failed": 1
        }
    },
    {
        "id": 5,
        "firstName": "Kabir",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Content Creation",
                "taskDescription": "Write blog articles for marketing.",
                "taskDate": "2025-03-02",
                "category": "Marketing",
                "active": false,
                "newTask": false,
                "completedTask": true,
                "failed": false
            },
            {
                "taskTitle": "Social Media Campaign",
                "taskDescription": "Launch a new social media campaign.",
                "taskDate": "2025-03-03",
                "category": "Marketing",
                "active": true,
                "newTask": true,
                "completedTask": false,
                "failed": false
            }
        ],
        "taskCount": {
            "active": 1,
            "newTask": 1,
            "completedTask": 1,
            "failed": 0
        }
    }
];

const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    
    return { employees, admin };
}