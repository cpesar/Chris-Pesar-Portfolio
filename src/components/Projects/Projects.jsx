// import React, { useState } from "react";
// // import Modal from "./ProjectModal";

// import { projects } from "../../data";

// import { Card, Image } from "antd";

// const ProjectList = ({ category }) => {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [currentProject, setCurrentProject] = useState();

//   const currentProjects = projects.filter(
//     (project) => project.category === category
//   );

//   const toggleModal = (image, i) => {
//     setCurrentProject({ ...image, index: i });
//     setModalOpen(!modalOpen);
//   };

//   return (
//     <>
//       <Card hoverable style={{ width: 400 }}>
//         {currentProjects.map((image, i) => (
//           <Image
//             src={require(`../../assets/Images${category}/${i}.png`).default}
//             alt={image.name}
//             className="img-thumbnail mx-1"
//             onClick={() => toggleModal(image, i)}
//             key={image.name}
//           />
//         ))}
//         {/* {modalOpen && (
//           <Modal currentProject={currentProject} onClose={toggleModal} />
//         )} */}
//       </Card>
//     </>
//   );
// };

// export default ProjectList;
