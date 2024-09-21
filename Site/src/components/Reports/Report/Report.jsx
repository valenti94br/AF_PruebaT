import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../../context/GlobalState'
import "../../../index.css"

const Report = () => {
    const { reports, getReports, deleteReport, archiveReport } = useContext(GlobalContext);
    const [showArchived, setShowArchived] = useState(false);

    useEffect(() => {
        getReports();
    }, [getReports]);

    const handleShowActiveReports = () => {
        setShowArchived(false);
        getReports();
    };

    const handleShowArchivedReports = () => {
        setShowArchived(true);
        getReports();
    };

    const activeReports = reports
        ?.filter(report => !report.archived)
        ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    const archivedReports = reports
        ?.filter(report => report.archived)
        ?.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <h1 class="navbar-brand">News App</h1>
                    <div class="d-flex">
                        <button class="btn btn-primary me-2" onClick={handleShowActiveReports}>New</button>
                        <button class="btn btn-primary" onClick={handleShowArchivedReports}>Archived</button>
                    </div>
                </div>
            </nav>

            {!showArchived ? (
                <div>
                    <h2>News</h2>
                    {activeReports?.map(report => (
                        <div class="card" key={report._id}>
                            <h3 class="card-title">{report.title}</h3>
                            <div class="card-body">
                                <div class="d-flex justify-content-center align-items-center">
                                    <p class="card-subtitle mb-2 text-body-secondary me-3"> {report.author}</p>
                                    <p class="card-subtitle mb-2 text-body-secondary"> <strong>Date:</strong>{new Date(report.createdAt).toLocaleDateString()}</p>
                                </div>
                                <div class="description">
                                    <p> {report.description}</p>
                                    <p> {report.content}</p>
                                </div>
                            </div>
                            <div class="card-footer">
                                <button class="btn btn-outline-success" onClick={() => archiveReport(report._id)}>Archive</button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div>
                    <h2>Archived News</h2>
                    {archivedReports?.map(report => (
                        <div class="card" key={report._id}>
                            <h3 class="card-title">{report.title}</h3>
                            <div class="card-body">
                                <div class="d-flex justify-content-center align-items-center">
                                    <p class="card-subtitle mb-2 text-body-secondary me-3"> {report.author}</p>
                                    <p class="card-subtitle mb-2 text-body-secondary"><strong>Archive Date:</strong> {new Date(report.updatedAt).toLocaleDateString()}</p>
                                </div>
                                <div class="description">
                                    <p> {report.description}</p>
                                    <p> {report.content}</p>
                                </div>
                            </div>
                            <div class="card-footer">
                                <button class="btn btn-outline-danger" onClick={() => deleteReport(report._id)}>Delete </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Report;