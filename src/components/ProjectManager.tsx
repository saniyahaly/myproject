
"use client";

import { useEffect, useState } from "react";

type Project = {
  id: number;
  title: string;
  description: string;
  created_at: string;
};

export default function ProjectManager() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  async function fetchProjects() {
    try {
      const response = await fetch("/api/projects", {
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("Could not load projects");
      }

      const data: Project[] = await response.json();
      setProjects(data);
      setError("");
    } catch {
      setError("Failed to load projects from NeonDB.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  function resetForm() {
    setTitle("");
    setDescription("");
    setEditingId(null);
  }

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();
    setSaving(true);
    setError("");
    setMessage("");

    try {
      const url =
        editingId !== null
          ? `/api/projects/${editingId}`
          : "/api/projects";

      const response = await fetch(url, {
        method: editingId !== null ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (!response.ok) {
        throw new Error("Could not save project");
      }

      setMessage(
        editingId !== null
          ? "Project updated successfully!"
          : "Project added successfully!"
      );

      resetForm();
      await fetchProjects();
    } catch {
      setError("Something went wrong while saving.");
    } finally {
      setSaving(false);
    }
  }

  function handleEdit(project: Project) {
    setEditingId(project.id);
    setTitle(project.title);
    setDescription(project.description);
    setMessage("");
    setError("");

    document
      .getElementById("project-form")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  async function handleDelete(id: number) {
    if (!window.confirm("Delete this project permanently?")) {
      return;
    }

    setDeletingId(id);
    setError("");
    setMessage("");

    try {
      const response = await fetch(`/api/projects/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Delete failed");
      }

      setMessage("Project deleted successfully!");
      if (editingId === id) resetForm();
      await fetchProjects();
    } catch {
      setError("Could not delete project.");
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <section
      id="projects"
      className="scroll-mt-24 bg-gradient-to-b from-[#fffafd] to-[#f9effb] px-5 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#bd82b8]">
            My Creative Portfolio
          </p>

          <h2 className="text-4xl font-black text-[#392945] sm:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
              Projects.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-[#897b93]">
            Explore my creative work. Projects are stored
            dynamically in a Neon PostgreSQL database.
          </p>
        </div>

        {error && (
          <p
            role="alert"
            className="mb-5 rounded-xl bg-red-50 p-4 text-red-600"
          >
            {error}
          </p>
        )}

        {message && (
          <p
            role="status"
            className="mb-5 rounded-xl bg-green-50 p-4 text-green-700"
          >
            {message}
          </p>
        )}

        <div className="mb-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            <p className="col-span-full text-center text-purple-500">
              Loading projects...
            </p>
          ) : projects.length === 0 ? (
            <div className="col-span-full rounded-3xl border border-pink-200 bg-white p-12 text-center shadow-sm">
              <div className="mb-4 text-5xl">🌸</div>
              <h3 className="text-xl font-bold text-[#493653]">
                No projects yet
              </h3>
              <p className="mt-3 text-[#897b93]">
                Add your first project using the form below.
              </p>
            </div>
          ) : (
            projects.map((project, index) => (
              <article
                key={project.id}
                className="group flex flex-col overflow-hidden rounded-[2rem] border border-pink-100 bg-white shadow-lg shadow-purple-100/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-40 items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-violet-200">
                  <span className="text-6xl">
                    {["🌷", "✨", "💜", "🎨", "💌"][
                      index % 5
                    ]}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-purple-400">
                    Project {String(project.id).padStart(2, "0")}
                  </p>

                  <h3 className="mt-3 break-words text-xl font-extrabold text-[#493653]">
                    {project.title}
                  </h3>

                  <p className="mt-3 flex-1 whitespace-pre-wrap break-words text-sm leading-7 text-[#897b93]">
                    {project.description}
                  </p>

                  <div className="mt-6 flex gap-3 border-t border-pink-100 pt-5">
                    <button
                      type="button"
                      onClick={() => handleEdit(project)}
                      className="flex-1 rounded-xl bg-purple-100 px-4 py-3 text-sm font-bold text-purple-700 transition hover:bg-purple-200"
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDelete(project.id)}
                      disabled={deletingId === project.id}
                      className="flex-1 rounded-xl bg-pink-100 px-4 py-3 text-sm font-bold text-rose-600 transition hover:bg-pink-200 disabled:opacity-50"
                    >
                      {deletingId === project.id
                        ? "Deleting..."
                        : "Delete"}
                    </button>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>

        <div
          id="project-form"
          className="mx-auto max-w-2xl scroll-mt-28 rounded-[2rem] border border-pink-100 bg-white p-7 shadow-xl shadow-purple-100/50 sm:p-10"
        >
          <div className="mb-7 text-center">
            <span className="text-4xl">✿</span>

            <h3 className="mt-3 text-2xl font-black text-[#493653]">
              {editingId !== null
                ? "Edit Your Project"
                : "Add a New Project"}
            </h3>

            <p className="mt-2 text-sm text-[#897b93]">
              Your changes will be saved in NeonDB.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="project-title"
                className="mb-2 block text-sm font-bold text-[#665572]"
              >
                Project Title
              </label>

              <input
                id="project-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                maxLength={255}
                placeholder="e.g. Social Media Campaign"
                className="w-full rounded-xl border border-pink-200 bg-[#fffbff] px-4 py-3 text-[#493653] outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
              />
            </div>

            <div>
              <label
                htmlFor="project-description"
                className="mb-2 block text-sm font-bold text-[#665572]"
              >
                Project Description
              </label>

              <textarea
                id="project-description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                rows={4}
                placeholder="Describe your amazing project..."
                className="w-full resize-y rounded-xl border border-pink-200 bg-[#fffbff] px-4 py-3 text-[#493653] outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
              />
            </div>

            <button
              type="submit"
              disabled={saving}
              className="w-full rounded-xl bg-gradient-to-r from-pink-400 to-purple-500 px-6 py-4 font-bold text-white shadow-lg shadow-purple-200 transition-all hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-60"
            >
              {saving
                ? "Saving..."
                : editingId !== null
                  ? "Update Project ✨"
                  : "Add Project ✨"}
            </button>

            {editingId !== null && (
              <button
                type="button"
                onClick={resetForm}
                className="w-full rounded-xl border border-purple-200 px-6 py-3 font-semibold text-purple-600 hover:bg-purple-50"
              >
                Cancel Editing
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
