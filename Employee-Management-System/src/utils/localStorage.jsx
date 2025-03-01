const employees = [   
    {
        "id": 1,
        "firstName": "Aarav",
        "email": "employee1@example.com",
        "password": "123",
        "taskCount": {
            "active": 2,
            "newTask": 1,
            "completedTask": 0,
            "failed": 0
        },
        "tasks": [
            {
                "taskTitle": "Complete Report",
                "taskDescription": "Gather sales data, analyze key metrics, format insights, and finalize the report.",
                "taskDate": "2025-02-23",
                "category": "Reports",
                "active": true,
                "newTask": true,
                "completedTask": false,
                "failed": false
            },
            {
                "taskTitle": "Team Meeting",
                "taskDescription": "Prepare an agenda, present progress updates, discuss challenges, and document decisions.",
                "taskDate": "2025-02-24",
                "category": "Meetings",
                "active": true,
                "newTask": false,
                "completedTask": false,
                "failed": false
            }
        ]
    },
    {
        "id": 2,
        "firstName": "Vihaan",
        "email": "employee2@example.com",
        "password": "123",
        "taskCount": {
            "active": 1,
            "newTask": 1,
            "completedTask": 1,
            "failed": 0
        },
        "tasks": [
            {
                "taskTitle": "Fix Bugs",
                "taskDescription": "Identify reported issues, debug and modify code, test for correctness, and document the fixes.",
                "taskDate": "2025-02-22",
                "category": "Development",
                "active": false,
                "newTask": false,
                "completedTask": true,
                "failed": false
            },
            {
                "taskTitle": "Deploy Update",
                "taskDescription": "Review code changes, prepare deployment scripts, execute deployment, and verify system stability.",
                "taskDate": "2025-02-25",
                "category": "Deployment",
                "active": true,
                "newTask": true,
                "completedTask": false,
                "failed": false
            }
        ]
    },
    {
        "id": 3,
        "firstName": "Ishaan",
        "email": "employee3@example.com",
        "password": "123",
        "taskCount": {
            "active": 1,
            "newTask": 1,
            "completedTask": 1,
            "failed": 0
        },
        "tasks": [
            {
                "taskTitle": "Client Meeting",
                "taskDescription": "Schedule the meeting, prepare documents, discuss project details, and summarize key points.",
                "taskDate": "2025-02-26",
                "category": "Client Management",
                "active": true,
                "newTask": true,
                "completedTask": false,
                "failed": false
            },
            {
                "taskTitle": "Draft Proposal",
                "taskDescription": "Outline project goals, define scope, estimate costs, and structure the final document.",
                "taskDate": "2025-02-27",
                "category": "Documentation",
                "active": false,
                "newTask": false,
                "completedTask": true,
                "failed": false
            }
        ]
    },
    {
        "id": 4,
        "firstName": "Reyansh",
        "email": "employee4@example.com",
        "password": "123",
        "taskCount": {
            "active": 2,
            "newTask": 1,
            "completedTask": 0,
            "failed": 1
        },
        "tasks": [
            {
                "taskTitle": "System Upgrade",
                "taskDescription": "Back up system data, install software updates, troubleshoot issues, and confirm stability.",
                "taskDate": "2025-02-28",
                "category": "IT Maintenance",
                "active": true,
                "newTask": false,
                "completedTask": false,
                "failed": true
            },
            {
                "taskTitle": "Security Audit",
                "taskDescription": "Review system logs, identify vulnerabilities, implement security fixes, and generate a report.",
                "taskDate": "2025-03-01",
                "category": "Security",
                "active": true,
                "newTask": true,
                "completedTask": false,
                "failed": false
            }
        ]
    },
    {
        "id": 5,
        "firstName": "Kabir",
        "email": "employee5@example.com",
        "password": "123",
        "taskCount": {
            "active": 1,
            "newTask": 1,
            "completedTask": 1,
            "failed": 0
        },
        "tasks": [
            {
                "taskTitle": "Content Creation",
                "taskDescription": "Research topics, create structured drafts, refine content, and finalize for publishing.",
                "taskDate": "2025-03-02",
                "category": "Marketing",
                "active": false,
                "newTask": false,
                "completedTask": true,
                "failed": false
            },
            {
                "taskTitle": "Social Media Campaign",
                "taskDescription": "Develop campaign strategy, design engaging content, schedule posts, and monitor performance.",
                "taskDate": "2025-03-03",
                "category": "Marketing",
                "active": true,
                "newTask": true,
                "completedTask": false,
                "failed": false
            }
        ]
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