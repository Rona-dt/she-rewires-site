# She Rewires Website

This is the official website for She Rewires, a women-led open innovation ecosystem in China dedicated to empowering women in STEAM (Science, Technology, Engineering, Arts, and Mathematics).

This project was bootstrapped with [v0](https://v0.dev).

## About She Rewires

She Rewires (formerly Ladies Who Tech) is a community-driven organization that began in 2017. Our mission is to ignite and reshape women's passion for STEAM fields, build a vibrant community, and foster leadership and lasting impact. We are the most active women-in-STEAM community in China, representing a new and vibrant image of Chinese women in technology.

## Tech Stack

This website is built with the following technologies:

*   **Framework:** [Next.js](https://nextjs.org/) - A React framework for building server-side rendered and static web applications.
*   **Language:** [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain JavaScript.
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
*   **UI Components:** [Shadcn/UI](https://ui.shadcn.com/) - A collection of re-usable UI components.
*   **Content:** [Markdown](https://www.markdownguide.org/) - Used for managing content for events and other pages.
*   **Deployment:** [Vercel](https://vercel.com/) - A cloud platform for static sites and Serverless Functions.

## Development

### Local Development

To run the project locally, we recommend using `pnpm` as it's the package manager used to initialize the project.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/she-rewires-site.git
    cd she-rewires-site
    ```

2.  **Install dependencies (with pnpm):**
    ```bash
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    pnpm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

**Note on Package Managers:** This project was set up with `pnpm`, which is the recommended package manager. If you use `npm install`, it might work, but it could lead to inconsistencies. It's best to use `pnpm` for this project.


## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/).

### Deploy with Vercel

1.  **Push your code to a Git repository.**
2.  **Sign up for a Vercel account.**
3.  **Create a new project in Vercel and connect it to your Git repository.**
4.  **Configure the project settings:**
    *   **Framework Preset:** Next.js
    *   **Build Command:** `pnpm run build`
    *   **Output Directory:** `.next`
5.  **Deploy!**

Vercel will automatically build and deploy your site. You will be provided with a unique URL for your deployment.

## Modifying with v0

This project was bootstrapped with [v0](https://v0.dev).

You can update the components by running:

```bash
pnpm dlx v0 add <component-name>
```

Or, you can copy and paste the code from the [v0 website](https://v0.dev).
