import React, { useEffect, useState, useMemo } from "react";
import Pagination from "./pagination";
import Wave from "./Wave";

const Others = () => {
	const [animate, setAnimate] = useState(true);
	const [repoData, setRepoData] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);

	//Set new Content
	useEffect(() => {
		fetch("https://api.github.com/users/James0724/repos")
			.then((res) => res.json())
			.then((result) => {
				setRepoData(result);
				setAnimate(false);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	let PageSize = 4;

	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		return repoData.slice(firstPageIndex, lastPageIndex);
	}, [currentPage, PageSize, repoData]);

	return (
		<section id="projects">
			{animate ? (
				<div className="project ">
					<Wave />
				</div>
			) : (
				<div className="project ">
					<div className="heading-wrapper ">
						<div className="heading">
							<span>I Make It Faster</span>
							<h2>Projects</h2>
						</div>
						<p>
							This includes projects thats I have been experiencing with
							throughout the different stages if learning, No success story is
							the same, we all have had our ups and downs in the learning
							process and things we wish we knew when we started out. Some
							projects I have done are a masterpiece which I have featured them
							in my works and some need to be worked on.
						</p>
					</div>
					<div className="project-dashboard">
						<div className="project-card">
							{currentTableData.map((project, i) => {
								return (
									<div key={i} className="project-details">
										<div className="icons">
											<div className="folder">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													role="img"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="1"
													strokeLinecap="round"
													strokeLinejoin="round"
													className="feather feather-folder"
												>
													<title>Folder</title>
													<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
												</svg>
											</div>
											<div className="project-links">
												<a
													href={project.svn_url}
													aria-label="External Link"
													className="external"
													target="_blank"
													rel="noopener noreferrer"
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														role="img"
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
														className="feather feather-external-link"
													>
														<title>External Link</title>
														<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
														<polyline points="15 3 21 3 21 9"></polyline>
														<line x1="10" y1="14" x2="21" y2="3"></line>
													</svg>
												</a>
											</div>
										</div>
										<h1 className="project-name">{project.name}</h1>
										<div className="project-description">
											<p>{project.description}</p>
										</div>
									</div>
								);
							})}
						</div>
						<Pagination
							className="pagination-bar"
							currentPage={currentPage}
							totalCount={repoData.length}
							pageSize={PageSize}
							onPageChange={(page) => setCurrentPage(page)}
						/>
					</div>
				</div>
			)}
		</section>
	);
};
export default Others;
