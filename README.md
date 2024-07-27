# Notebook-note_taking_app
## Notebook, a notes managing website, includes technologies such as React.js and Tailwind CSS.
---
## Features 
- Create, update, delete, and read notes
- Uses local storage to store notes data.
- Includes pagination, allowing you to show 10 notes per page.
- Responsive design and works on every screen width.



![image](https://res.cloudinary.com/dzlpv4yx6/image/upload/v1722097151/social-media-images/od43dix9h23uet6duncg.png)

![image](https://res.cloudinary.com/dzlpv4yx6/image/upload/v1722097151/social-media-images/az8klpwfhtd44du2bzph.png)


## Getting Started
1. Clone the repository to your local machine.
```bash
git clone https://github.com/himanshu8443/SocialSphere.git
```
2. Set up the environment variables: <br>
Create `.env` in root and `./server` folders check `.env.example` file of the respectable folder to get environment variables.

3. Install the required packages.
```bash
cd SocialSphere
npm install
```
4. Start server
```bash
cd server
npx prisma generate
cd ..
npm run dev:server
```
5. Start client
```bash
npm run dev:client
```



Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
