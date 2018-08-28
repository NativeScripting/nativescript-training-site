import * as React from 'react';
import { Course } from '../../domain/models';
import { CourseCurriculumChapter } from './course-curriculum-chapter';

interface CourseInstructorsProps {
  course: Course;
}

export const CourseInstructors: React.StatelessComponent<
  CourseInstructorsProps
> = (props: CourseInstructorsProps) => {
  const course = props.course;

  return (
    <div className="panel">
      <div className="panel-heading">
        <h5 className="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">
            Instructors
          </a>
        </h5>
      </div>

      <div id="collapse2" className="panel-collapse collapse">
        <div className="panel-body">
          <div className="instructor-panel">
            <div className="row">
              <div className="col-sm-3 col-xs-12 name">
                <img src="images/course/5.jpg" alt="" />
                <h6>Saruta Janifao</h6>
                <p>Web Developer</p>
              </div>
              <div className="col-sm-5 col-xs-12">
                <div className="instructor-info">
                  <h5>Talk To Instrutore</h5>
                  <p>If you have questions or wish to schedule </p>
                  <a href="#">+8801912704287</a>
                </div>
              </div>
              <div className="col-sm-4 col-xs-12 teachers">
                <h6>Teacher</h6>
                <ul>
                  <li>
                    <a href="#">1. Sir. Mahfuz Riad( English )</a>
                  </li>
                  <li>
                    <a href="#">2. Sir. Masum Rana ( Math )</a>
                  </li>
                  <li>
                    <a href="#">3. Sir. Foqrul islam ( Bangla LC )</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-3 col-xs-12 name">
                <img src="images/course/6.jpg" alt="" />
                <h6>Mahfuz Riad</h6>
                <p>Web Developer</p>
              </div>
              <div className="col-sm-5 col-xs-12">
                <div className="instructor-info">
                  <h5>Talk To Instrutore</h5>
                  <p>If you have questions or wish to schedule </p>
                  <a href="#">+8801912704287</a>
                </div>
              </div>
              <div className="col-sm-4 col-xs-12 teachers">
                <h6>Teacher</h6>
                <ul>
                  <li>
                    <a href="#">1. Sir. Mahfuz Riad( English )</a>
                  </li>
                  <li>
                    <a href="#">2. Sir. Masum Rana ( Math )</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
