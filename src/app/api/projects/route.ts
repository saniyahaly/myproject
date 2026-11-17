
import { NextResponse } from "next/server";
import { sql } from "../../../lib/db";

export const dynamic = "force-dynamic";

// GET: Fetch all projects from NeonDB
export async function GET() {
  try {
    const projects = await sql`
      SELECT id, title, description, created_at
      FROM projects
      ORDER BY id DESC
    `;

    return NextResponse.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);

    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

// POST: Add a new project to NeonDB
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, description } = body;

    if (
      typeof title !== "string" ||
      typeof description !== "string" ||
      !title.trim() ||
      !description.trim()
    ) {
      return NextResponse.json(
        { error: "Title and description are required" },
        { status: 400 }
      );
    }

    const result = await sql`
      INSERT INTO projects (title, description)
      VALUES (${title.trim()}, ${description.trim()})
      RETURNING id, title, description, created_at
    `;

    return NextResponse.json(result[0], {
      status: 201,
    });
  } catch (error) {
    console.error("Error adding project:", error);

    return NextResponse.json(
      { error: "Failed to add project" },
      { status: 500 }
    );
  }
}
