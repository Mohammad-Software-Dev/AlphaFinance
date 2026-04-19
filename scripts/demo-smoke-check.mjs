import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();

function read(path) {
  return readFileSync(resolve(root, path), "utf8");
}

function assertContains(text, snippet, message) {
  if (!text.includes(snippet)) {
    throw new Error(message + ` (missing: ${snippet})`);
  }
}

function assertNotContains(text, snippet, message) {
  if (text.includes(snippet)) {
    throw new Error(message + ` (found: ${snippet})`);
  }
}

const router = read("src/router.tsx");
assertContains(router, 'to="/dashboard"', "Root route should redirect to /dashboard");
assertContains(router, 'path: "/notifications"', "Notifications route should exist");
assertContains(router, 'path: "/settings"', "Settings route should exist");
assertContains(router, 'path: "*"', "Catch-all route should exist");
assertNotContains(router, "ProtectedRoute", "ProtectedRoute should be removed from router");
assertNotContains(router, "/auth/callback", "Auth callback route should be removed");

const blogPostPage = read("src/pages/BlogPage/BlogPostPage.tsx");
assertContains(blogPostPage, "useParams", "Blog post page should use route params");
assertContains(blogPostPage, "post.id === blogId", "Blog post page should resolve data by blogId");
assertContains(blogPostPage, "Post not found", "Blog post page should handle unknown IDs");

const signIn = read("src/pages/SignIn/useSignInForm.ts");
assertContains(signIn, 'navigate("/dashboard")', "Sign-in should use demo redirect");
assertNotContains(signIn, "beginLogin", "Sign-in should not call auth login flow");

console.log("Demo smoke checks passed.");
