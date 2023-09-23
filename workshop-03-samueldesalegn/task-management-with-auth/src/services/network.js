let user = { email: "test@miu.edu", password: "123" }
export default function login(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === user.email && password === user.password) {
        resolve(user);
      } else {
        reject("Wrong email or password")
      }
    }, 100)
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


// import axios from "axios";
// axios.defaults.baseURL = "http://localhost:5001";

// export async function login(user) {
//   const url = "/login";
//   try {
//     const res = await axios.post(url, user);
//     return res.data;
//   } catch (error) {
//     return null;
//   }
// }

// export async function postTasks(user) {
//   const url = "/AddNewTask";
//   try {
//     const res = await axios.post(url, user);
//     return res.data;
//   } catch (error) {
//     return null;
//   }
// }

// export async function getTasks(user) {
//   const url = "/tasks";
//   axios.defaults.headers.common["Authorization"] = `Bearer ${user}`
//   try {
//     const res = await axios.get(url);
//     return res.data;
//   } catch (error) {
//     return null;
//   }
// }