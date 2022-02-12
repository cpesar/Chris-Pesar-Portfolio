// import React, { useState } from "react";

// import "antd/dist/antd.css";
// import { Modal, Button, Image } from "antd";

// const ProjectModal = ({ onClose, currentProject }) => {
//   const { title, category, description, site, repo, index } = currentProject;

//   const [isModalVisible, setIsModalVisible] = useState(false);

//   const showModal = () => {
//     setIsModalVisible(true);
//   };

//   const handleOk = () => {
//     setIsModalVisible(false);
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };
//   return (
//     <>
//       <Button type="primary" onClick={showModal}>
//         Open Modal
//       </Button>
//       <Modal
//         // width={1000}
//         title="Basic Modal"
//         visible={isModalVisible}
//         onOk={handleOk}
//         onCancel={handleCancel}
//       >
//         <Image
//           src={require(`../../assets/Images${category}/${index}.png`).default}
//           alt="current category"
//         />
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//       </Modal>
//     </>
//   );
// };

// export default ProjectModal;
