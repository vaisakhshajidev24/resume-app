import { Button } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import './landingpage.css'
import Footer from '../components/Footer';

function Landingpage() {
  return (
    <div>
      <section id="bg1">
        <div className="row pt-5">
          <div className="col-12 col-md-4"></div>
          <div className="col-12 col-md-4 box py-5 border rounded mt-5 text-center">
            <h3>Design to get hired.</h3>
            <h4>Your skills , your story, your next job - all in one.</h4>
            <Link to={"/resume-generator"}>
              <Button
                sx={{ backgroundColor: "rgb(53, 4, 99)" }}
                variant="contained"
              >
                Make your Resume
              </Button>
            </Link>
          </div>
          <div className="col-12 col-md-4"></div>
        </div>
      </section>

      <section className="p-5">
        <h3 className="text-center">Tools</h3>
        <div className="row">
          <div className="col-12 col-md-6 p-5">
            <h4>Resume</h4>
            <p>Create unlimited new resumes and easily edit them afterwards.</p>
            <h4>Cover Letters</h4>
            <p>Easily write proffesional cover letters.</p>
            <h4>Jobs</h4>
            <p>Automatically recives new and relavent job postings.</p>
            <h4>Appilcations</h4>
            <p>
              Effortlessily manage and track your job application in an
              organized manner
            </p>
          </div>
          <div className="col-12 col-md-6 p-6">
            <img
              width={"70%"}
              alt=""
              src="https://cdn-images.zety.com/images/zety/landings/builder/in/resume-builder-template@2x.png"
            />
          </div>
        </div>
      </section>

      <section id="bg2"></section>
      <section>
        <div className="row p-5">
          <h3 className="text-center my-3">Testimony</h3>
          <div className="col-12 col-md-6">
            <h4>Trusted by proffesionals worldwide.</h4>
            <p>
              At LiveCareer, we don't just help you create résumés — we help you
              land the job. Whether you're a seasoned professional or just
              starting out, our tools are designed to get results.
            </p>
            <p>
              In fact, users who used LiveCareer reported getting hired an
              average of 48 days faster.
            </p>
            <p>
              Join thousands of job-seekers who’ve fast-tracked their careers
              with a résumé that truly stands out.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <div className="row">
              <div className="col-3">
                <img className='img-fluid w-100' alt="" src="https://i.pinimg.com/736x/eb/76/a4/eb76a46ab920d056b02d203ca95e9a22.jpg"/>
              </div>
              <div className="col-3">
                <img className='img-fluid w-100' alt="" src="https://i.pinimg.com/736x/eb/76/a4/eb76a46ab920d056b02d203ca95e9a22.jpg" />
              </div>
              <div className="col-3">
                <img className='img-fluid w-100' alt="" src="https://i.pinimg.com/736x/eb/76/a4/eb76a46ab920d056b02d203ca95e9a22.jpg"/>
              </div>
              <div className="col-3">
                <img className='img-fluid w-100' alt="" src="https://i.pinimg.com/736x/eb/76/a4/eb76a46ab920d056b02d203ca95e9a22.jpg" />
              </div>
            </div>
            <div className="row my-3">
              <div className="col-3">
                <img className='img-fluid w-100' alt="" src="https://i.pinimg.com/736x/eb/76/a4/eb76a46ab920d056b02d203ca95e9a22.jpg" />
              </div>
              <div className="col-3">
                <img className='img-fluid w-100' alt="" src="https://i.pinimg.com/736x/eb/76/a4/eb76a46ab920d056b02d203ca95e9a22.jpg"  />
              </div>
              <div className="col-3">
                <img className='img-fluid w-100' alt="" src="https://i.pinimg.com/736x/eb/76/a4/eb76a46ab920d056b02d203ca95e9a22.jpg"/>
              </div>
              <div className="col-3">
                <img className='img-fluid w-100' alt="" src="https://i.pinimg.com/736x/eb/76/a4/eb76a46ab920d056b02d203ca95e9a22.jpg"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landingpage
