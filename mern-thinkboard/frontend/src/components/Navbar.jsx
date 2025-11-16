import { PlusIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import { useState } from "react";
import CreateNodeModal from "./CreateNodeModal";

// This is navbar component used in Home Page
const Navbar = ({ notes, setNotes }) => {
  const [openCreateModal, setOpenCreateModal] = useState(false);

  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary font-mono tracking-tight">
            TaskMate
          </h1>
          <div className="flex items-center gap-4">
            <Link
              className="btn btn-primary"
              onClick={() => setOpenCreateModal(true)}
            >
              <PlusIcon className="black" />
              <span>New Note</span>
            </Link>
            {openCreateModal && (
              <CreateNodeModal
                setOpenCreateModal={setOpenCreateModal}
                notes={notes}
                setNotes={setNotes}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
