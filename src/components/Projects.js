import React, { useState } from "react";
import { motion } from "framer-motion";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useInView } from 'react-intersection-observer';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
};

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState();
  const handleOpen = (data) => {
    setOpen(true)
    setData(data)
  }
  const handleClose = () => setOpen(false);

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="mb-6 pb-7 w-screen bg-slate-100" id="projects">
      {inView && (
        <motion.div
          className="flex gap-2 flex-wrap items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
      <div className='flex items-center justify-center h-[100px] '>
            <h1 className='text-7xl underline'>Projects</h1>
          </div>
          <div className="flex flex-wrap items-center justify-center">

          <div className="bg-white mx-5 mt-4 flex items-center justify-center flex-col rounded-lg shadow-md w-[300px]">
            <motion.img
              src={
                "https://enactus-mnnit.netlify.app/img/enactus/neer/neer%20(2).jpg"
              }
              className="w-full h-[400px] object-cover rounded-t-lg bg-black "
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <h3 className="text-xl font-semibold p-4">Project Neer</h3>
            <motion.button
              className="flex items-center justify-center w-[90%] bg-blue-600 text-white p-3 m-2 mx-3 rounded-full"
              onClick={() => { handleOpen(1) }}
              whileHover={{ scale: 1.1 }}
            >
              Read More
            </motion.button>
          </div>
          <div className="bg-white mx-5 mt-4 flex items-center justify-center flex-col rounded-lg shadow-md w-[300px]">
            <motion.img
              src={
                "https://enactus-mnnit.netlify.app/img/enactus/sahyog/sahyog%20(1).jpg"
              }
              className="w-full h-[400px] object-cover rounded-t-lg bg-black "
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <h3 className="text-xl font-semibold p-4">Project Sahyog</h3>
            <motion.button
              className="flex items-center justify-center w-[90%] bg-blue-600 text-white p-3 m-2 mx-3 rounded-full"
              onClick={() => { handleOpen(2) }}
              whileHover={{ scale: 1.1 }}
            >
              Read More
            </motion.button>
          </div>
          <div className="bg-white mx-5 mt-4 flex items-center justify-center flex-col rounded-lg shadow-md w-[300px]">
            <motion.img
              src={
                "https://enactus-mnnit.netlify.app/img/enactus/moonj/moonj%20(4).jpg"
              }
              className="w-full h-[400px] object-cover rounded-t-lg bg-black "
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <h3 className="text-xl font-semibold p-4">Project Moonj</h3>
            <motion.button
              className="flex items-center justify-center w-[90%] bg-blue-600 text-white p-3 m-2 mx-3 rounded-full"
              onClick={() => { handleOpen(3) }}
              whileHover={{ scale: 1.1 }}
            >
              Read More
            </motion.button>
          </div>
          <div className="bg-white mx-5 mt-4 flex items-center justify-center flex-col rounded-lg shadow-md w-[300px]">
            <motion.img
              src={
                "https://enactus-mnnit.netlify.app/img/enactus/samvesh/samvesh%20(3).jpg"
              }
              className="w-full h-[400px] object-cover rounded-t-lg bg-black "
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <h3 className="text-xl font-semibold p-4">Project Samvesh</h3>
            <motion.button
              className="flex items-center justify-center w-[90%] bg-blue-600 text-white p-3 m-2 mx-3 rounded-full"
              onClick={() => { handleOpen(4) }}
              whileHover={{ scale: 1.1 }}
            >
              Read More
            </motion.button>
          </div>
          </div>

        </motion.div>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="h-screen w-screen">
          <button onClick={handleClose} className="bg-blue-700 fixed text-white rounded-md p-3">
            Close
          </button>
          <div className="flex items-center justify-center overflow-y-scroll h-screen">
            {
              data === 1 ?
                <div className="flex items-center justify-center flex-col">
                  <img src="https://enactus-mnnit.netlify.app/img/enactus/neer/neer%20(10).jpg" className="h-[500px] rounded-md mb-4" alt="headline" />
                  <div className="text-2xl font-bold">Project Neer</div>
                </div>
                : data === 2 ?
                  <div className="flex items-center justify-center flex-col">
                    <img src="https://enactus-mnnit.netlify.app/img/enactus/sahyog/sahyog%20(3).jpg" className="h-[500px] rounded-md mb-4" alt="headline" />
                    <div className="text-2xl font-bold">Project Sahyog</div>
                  </div>
                  : data === 3 ?
                    <div className="flex items-center justify-center flex-col">
                      <img src="https://enactus-mnnit.netlify.app/img/enactus/moonj/moonj%20(2).jpg" className="h-[500px] rounded-md mb-4" alt="headline" />
                      <div className="text-2xl font-bold">Project Moonj</div>
                    </div>
                    : data === 4 ?
                      <div className="flex items-center justify-center flex-col">
                        <img src="https://enactus-mnnit.netlify.app/img/enactus/samvesh/samvesh%20(9).jpg" className="h-[500px] rounded-md mb-4" alt="headline" />
                        <div className="text-2xl font-bold">Project Samvesh</div>
                      </div>
                      : ""
            }
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Projects;
