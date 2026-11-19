"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import "./admin.css";

type Status = "Pending" | "Accepted" | "Rejected";

type Application = {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  interest: string;
  skills: string;
  experience: string;
  motivation: string;
  availability: string;
  date: string;
  status: Status;
};

const initialApplications: Application[] = [
  {
    id: "DEMO-001",
    name: "Aminata Kamara",
    email: "aminata@example.com",
    phone: "+232 00 000 001",
    location: "Freetown",
    interest: "Community Outreach",
    skills: "Communication, teamwork, event support",
    experience: "Community activities and local volunteering",
    motivation: "I want to contribute to projects that make a positive difference in my community.",
    availability: "Weekends",
    date: "18 Nov 2026",
    status: "Pending",
  },
  {
    id: "DEMO-002",
    name: "Ibrahim Sesay",
    email: "ibrahim@example.com",
    phone: "+232 00 000 002",
    location: "Bo",
    interest: "Technology",
    skills: "Web development, digital literacy",
    experience: "Personal web projects",
    motivation: "I would like to use my technology skills to support meaningful initiatives.",
    availability: "Weekdays",
    date: "17 Nov 2026",
    status: "Accepted",
  },
  {
    id: "DEMO-003",
    name: "Mariatu Conteh",
    email: "mariatu@example.com",
    phone: "+232 00 000 003",
    location: "Makeni",
    interest: "Education",
    skills: "Teaching, mentoring, communication",
    experience: "Peer tutoring",
    motivation: "I enjoy helping young people learn and develop their confidence.",
    availability: "Flexible",
    date: "16 Nov 2026",
    status: "Pending",
  },
  {
    id: "DEMO-004",
    name: "Samuel Koroma",
    email: "samuel@example.com",
    phone: "+232 00 000 004",
    location: "Kenema",
    interest: "Media & Communications",
    skills: "Photography, writing, social media",
    experience: "Student media activities",
    motivation: "I want to help share stories about positive community work.",
    availability: "Weekends",
    date: "15 Nov 2026",
    status: "Rejected",
  },
  {
    id: "DEMO-005",
    name: "Fatmata Jalloh",
    email: "fatmata@example.com",
    phone: "+232 00 000 005",
    location: "Freetown",
    interest: "Community Outreach",
    skills: "Organisation, leadership, teamwork",
    experience: "Youth group activities",
    motivation: "I want to gain experience while contributing to my community.",
    availability: "Flexible",
    date: "14 Nov 2026",
    status: "Pending",
  },
];

const statuses: Status[] = ["Pending", "Accepted", "Rejected"];

export default function AdminPage() {
  const [applications, setApplications] = useState(initialApplications);
  const [selected, setSelected] = useState<Application | null>(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredApplications = useMemo(() => {
    const term = search.trim().toLowerCase();

    return applications.filter((application) => {
      const matchesSearch =
        !term ||
        application.name.toLowerCase().includes(term) ||
        application.email.toLowerCase().includes(term) ||
        application.interest.toLowerCase().includes(term) ||
        application.location.toLowerCase().includes(term);

      const matchesStatus =
        filter === "All" || application.status === filter;

      return matchesSearch && matchesStatus;
    });
  }, [applications, search, filter]);

  const counts = {
    total: applications.length,
    pending: applications.filter((item) => item.status === "Pending").length,
    accepted: applications.filter((item) => item.status === "Accepted").length,
    rejected: applications.filter((item) => item.status === "Rejected").length,
  };

  function updateStatus(id: string, status: Status) {
    setApplications((current) =>
      current.map((item) =>
        item.id === id ? { ...item, status } : item,
      ),
    );

    setSelected((current) =>
      current?.id === id ? { ...current, status } : current,
    );
  }

  return (
    <main className="admin-shell">
      <aside className="admin-sidebar">
        <Link className="admin-brand" href="/" aria-label="SEENRO homepage">
          <span className="admin-brand-mark">S</span>
          <span>SEENRO</span>
        </Link>

        <div className="admin-sidebar-label">WORKSPACE</div>

        <nav className="admin-nav" aria-label="Admin navigation">
          <a className="admin-nav-link active" href="#overview">
            <span aria-hidden="true">▦</span>
            Overview
          </a>
          <a className="admin-nav-link" href="#applications">
            <span aria-hidden="true">▤</span>
            Applications
            <span className="nav-count">{counts.total}</span>
          </a>
        </nav>

        <div className="admin-sidebar-bottom">
          <div className="admin-profile">
            <div className="admin-avatar">A</div>
            <div>
              <strong>Administrator</strong>
              <span>Preview account</span>
            </div>
          </div>
          <Link className="admin-back-link" href="/">
            ← Back to public website
          </Link>
        </div>
      </aside>

      <section className="admin-main">
        <header className="admin-topbar">
          <div>
            <div className="admin-breadcrumb">Workspace / Administration</div>
            <h1>Volunteer dashboard</h1>
          </div>
          <div className="admin-topbar-right">
            <span className="admin-mode-label">DEMO MODE</span>
            <div className="admin-top-avatar">A</div>
          </div>
        </header>

        <div className="admin-content">
          <div className="admin-demo-notice">
            <span className="notice-icon" aria-hidden="true">ⓘ</span>
            <div>
              <strong>Preview dashboard — demo data only</strong>
              <p>
                These are fictional sample applications. No real applicant
                information is connected, and changes are not saved.
              </p>
            </div>
          </div>

          <section id="overview" className="admin-overview">
            <div className="admin-section-heading">
              <div>
                <h2>Overview</h2>
                <p>Volunteer application activity at a glance.</p>
              </div>
              <span className="admin-date-label">Sample data · November 2026</span>
            </div>

            <div className="admin-stat-grid">
              <article className="admin-stat-card">
                <div className="stat-top">
                  <span>Total applications</span>
                  <span className="stat-icon green">▤</span>
                </div>
                <strong>{counts.total}</strong>
                <small>Demo records</small>
              </article>
              <article className="admin-stat-card">
                <div className="stat-top">
                  <span>Pending review</span>
                  <span className="stat-icon amber">◷</span>
                </div>
                <strong>{counts.pending}</strong>
                <small>Awaiting a decision</small>
              </article>
              <article className="admin-stat-card">
                <div className="stat-top">
                  <span>Accepted</span>
                  <span className="stat-icon blue">✓</span>
                </div>
                <strong>{counts.accepted}</strong>
                <small>Marked as accepted</small>
              </article>
              <article className="admin-stat-card">
                <div className="stat-top">
                  <span>Rejected</span>
                  <span className="stat-icon red">×</span>
                </div>
                <strong>{counts.rejected}</strong>
                <small>Marked as rejected</small>
              </article>
            </div>
          </section>

          <section id="applications" className="admin-applications">
            <div className="admin-section-heading applications-heading">
              <div>
                <h2>Volunteer applications</h2>
                <p>Review and manage the sample applicant records.</p>
              </div>
            </div>

            <div className="admin-toolbar">
              <label className="admin-search">
                <span aria-hidden="true">⌕</span>
                <input
                  type="search"
                  placeholder="Search name, email, interest..."
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />
              </label>

              <label className="admin-filter">
                <span>Status:</span>
                <select
                  value={filter}
                  onChange={(event) => setFilter(event.target.value)}
                >
                  <option>All</option>
                  {statuses.map((status) => (
                    <option key={status}>{status}</option>
                  ))}
                </select>
              </label>
            </div>

            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>APPLICANT</th>
                    <th>AREA OF INTEREST</th>
                    <th>DATE</th>
                    <th>STATUS</th>
                    <th><span className="sr-only">Actions</span></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredApplications.map((application) => (
                    <tr key={application.id}>
                      <td>
                        <div className="applicant-cell">
                          <div className="applicant-avatar">
                            {application.name.charAt(0)}
                          </div>
                          <div>
                            <strong>{application.name}</strong>
                            <span>{application.email}</span>
                          </div>
                        </div>
                      </td>
                      <td>{application.interest}</td>
                      <td className="date-cell">{application.date}</td>
                      <td>
                        <span
                          className={`status-pill ${application.status.toLowerCase()}`}
                        >
                          <span />
                          {application.status}
                        </span>
                      </td>
                      <td>
                        <button
                          className="view-button"
                          onClick={() => setSelected(application)}
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filteredApplications.length === 0 && (
                <div className="admin-empty">
                  <span aria-hidden="true">⌕</span>
                  <strong>No applications found</strong>
                  <p>Try another search term or status filter.</p>
                </div>
              )}
            </div>

            <div className="admin-table-footer">
              Showing {filteredApplications.length} of {applications.length} demo records
            </div>
          </section>

          <footer className="admin-footer">
            SEENRO Technology · Volunteer administration preview
          </footer>
        </div>
      </section>

      {selected && (
        <div
          className="admin-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelected(null);
          }}
        >
          <section
            className="admin-detail-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="detail-title"
          >
            <div className="detail-header">
              <div>
                <span className="detail-eyebrow">DEMO APPLICATION · {selected.id}</span>
                <h2 id="detail-title">Applicant details</h2>
              </div>
              <button
                className="detail-close"
                onClick={() => setSelected(null)}
                aria-label="Close applicant details"
              >
                ×
              </button>
            </div>

            <div className="detail-person">
              <div className="detail-avatar">{selected.name.charAt(0)}</div>
              <div>
                <h3>{selected.name}</h3>
                <p>{selected.interest}</p>
              </div>
            </div>

            <div className="detail-fields">
              <div><span>Email</span><strong>{selected.email}</strong></div>
              <div><span>Phone</span><strong>{selected.phone}</strong></div>
              <div><span>Location</span><strong>{selected.location}</strong></div>
              <div><span>Application date</span><strong>{selected.date}</strong></div>
              <div><span>Skills</span><strong>{selected.skills}</strong></div>
              <div><span>Experience</span><strong>{selected.experience}</strong></div>
              <div><span>Availability</span><strong>{selected.availability}</strong></div>
              <div className="detail-wide">
                <span>Motivation</span>
                <strong>{selected.motivation}</strong>
              </div>
            </div>

            <div className="detail-status">
              <label htmlFor="demo-status">Application status</label>
              <select
                id="demo-status"
                value={selected.status}
                onChange={(event) =>
                  updateStatus(selected.id, event.target.value as Status)
                }
              >
                {statuses.map((status) => (
                  <option key={status}>{status}</option>
                ))}
              </select>
              <p>Demo change only. This status is not saved to a database.</p>
            </div>

            <button
              className="detail-done"
              onClick={() => setSelected(null)}
            >
              Close details
            </button>
          </section>
        </div>
      )}
    </main>
  );
}
