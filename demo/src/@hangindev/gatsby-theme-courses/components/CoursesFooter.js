import React from 'react';

function CoursesFooter() {
  return (
    <footer>
      <h4>Roadmap</h4>
      <ul
        style={{
          listStyleType: 'none',
        }}
      >
        <li>
          <span role="img" aria-label="white-sqaure">
            ⬜
          </span>{' '}
          ใช้วีดีโอเป็นสื่อการสอน
        </li>
        <li>
          <span role="img" aria-label="white-sqaure">
            ⬜
          </span>{' '}
          รองรับการจำกัดการเข้าถึง
        </li>
      </ul>
    </footer>
  );
}

export default CoursesFooter;
