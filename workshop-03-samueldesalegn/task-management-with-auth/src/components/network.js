let user = { email: "your-email@miu.edu", password: "123456" }
export default function login(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === user.email && password === user.password) {
        resolve(user);
      } else {
        reject("Wrong email or password")
      }
    }, 1000)
  })
}

const tasks = [
  {
    id: "1",
    title: "Implment task input",
    description: "Implment a form to enter a task",
    duration: "2 days",
    deadline: "2023-09-20",
    assignee: "John",
    assignor: "David",
    status: "progressing" //assigned, progressing, done, postpone, canceled
  },
  {
    id: "2",
    title: "test task input",
    description: "test a form to enter a task",
    duration: "2 days",
    deadline: "2023-09-23",
    assignee: "Michael",
    assignor: "David",
    status: "assigned" //assigned, progressing, done, postpone, canceled
  }
];

export function getTasks() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(tasks);
    }, 100);
  })
}

// export default tasks;