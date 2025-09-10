import { useState, useEffect } from 'react';

export default function Timeline() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Benguiat+Pro:wght@400;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Asimovian&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Frijole&display=swap');

        .timeline-heading {
          font-family: "Frijole", system-ui;
          font-weight: 400;
          font-style: normal;
          font-size: clamp(2rem, 6vw, 4rem);
          color: #ffffff;
          text-align: center;
          text-transform: uppercase;
          margin: clamp(2rem, 5vw, 3rem) 0 clamp(1rem, 3vw, 2rem) 0;
          text-shadow: 
            2px 2px 4px rgba(0, 0, 0, 0.8),
            0 0 15px rgba(255, 0, 0, 0.3);
          position: relative;
        }

        .timeline-heading::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: min(60%, 200px);
          height: 3px;
          background: linear-gradient(90deg, transparent, #ff0000, transparent);
          animation: glow 2s ease-in-out infinite alternate;
        }

        @keyframes glow {
          0% { box-shadow: 0 0 5px #ff0000; }
          100% { box-shadow: 0 0 20px #ff0000; }
        }

        /* Large screen horizontal timeline styles */
        .timeline-horizontal-container {
          padding: 4rem 2rem;
          overflow-x: auto;
          overflow-y: hidden;
          width: 100%;
        }

        .timeline {
          display: flex;
          list-style: none;
          padding: 0;
          margin: 0;
          position: relative;
          width: 100%;
        }

        .timeline.timeline-horizontal {
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          min-height: 400px;
        }

        .timeline.timeline-horizontal li {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          flex: 1;
          min-width: 200px;
        }

        .timeline.timeline-horizontal hr {
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #ff0000 0%, #8b0000 50%, #ff0000 100%);
          border: none;
          margin: 0;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateY(-50%);
          box-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
        }

        .timeline.timeline-horizontal li:first-child hr {
          display: none;
        }

        .timeline.timeline-horizontal li:not(:first-child) hr {
          left: -50%;
          width: 100%;
        }

        .timeline-start {
          font-family: "Benguiat Pro", serif;
          font-weight: 700;
          font-size: 1.8rem;
          color: #ffffff;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
          margin-bottom: 2rem;
          order: -1;
        }

        .timeline-middle {
          width: 4rem;
          height: 4rem;
          background: linear-gradient(135deg, #ff0000, #8b0000);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 3px solid #ffffff;
          box-shadow: 
            0 0 20px rgba(255, 0, 0, 0.6),
            inset 0 0 10px rgba(255, 255, 255, 0.2);
          animation: pulse 2s infinite;
          z-index: 10;
          position: relative;
        }

        .timeline-middle svg {
          width: 1.5rem;
          height: 1.5rem;
          fill: white;
        }

        @keyframes pulse {
          0%, 100% { 
            box-shadow: 
              0 0 20px rgba(255, 0, 0, 0.6),
              inset 0 0 10px rgba(255, 255, 255, 0.2);
          }
          50% { 
            box-shadow: 
              0 0 30px rgba(255, 0, 0, 0.8),
              inset 0 0 15px rgba(255, 255, 255, 0.3);
          }
        }

        .timeline-end {
          margin-top: 2rem;
          order: 1;
        }

        .timeline-box {
          background: linear-gradient(135deg, 
            rgba(139, 0, 0, 0.3) 0%, 
            rgba(255, 0, 0, 0.15) 50%, 
            rgba(139, 0, 0, 0.3) 100%);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 0, 0, 0.4);
          border-radius: 20px;
          padding: 1.5rem 2rem;
          box-shadow: 
            0 8px 32px rgba(255, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          position: relative;
          min-width: 200px;
        }

        .timeline-box:hover {
          transform: translateY(-5px);
          box-shadow: 
            0 12px 40px rgba(255, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
        }

        .timeline-box::after {
          content: '';
          position: absolute;
          top: 10px;
          right: 10px;
          width: 20px;
          height: 20px;
          border-top: 2px solid #ff0000;
          border-right: 2px solid #ff0000;
          opacity: 0.7;
        }

        .slot-title {
          font-family: "Asimovian", sans-serif;
          font-size: 1.4rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.5rem;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
        }

        .slot-time {
          font-family: "Asimovian", sans-serif;
          font-size: 1.1rem;
          color: #ffcccc;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
        }

        /* Vertical timeline for smaller screens */
        .timeline-container {
          position: relative;
          max-width: 100%;
          margin: clamp(2rem, 5vw, 4rem) auto;
          padding: 0;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(180deg, #ff0000 0%, #8b0000 50%, #ff0000 100%);
          transform: translateX(-50%);
          border-radius: 2px;
          box-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
        }

        .timeline-item {
          position: relative;
          margin-bottom: clamp(3rem, 8vw, 6rem);
          width: 100%;
        }

        .day-heading {
          font-family: "Benguiat Pro", serif;
          font-weight: 700;
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          color: #ffffff;
          text-align: center;
          margin-bottom: clamp(2rem, 5vw, 3rem);
          position: relative;
          z-index: 10;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
        }

        .timeline-middle-vertical {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          z-index: 5;
          width: clamp(3rem, 8vw, 4rem);
          height: clamp(3rem, 8vw, 4rem);
          background: linear-gradient(135deg, #ff0000, #8b0000);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 3px solid #ffffff;
          box-shadow: 
            0 0 20px rgba(255, 0, 0, 0.6),
            inset 0 0 10px rgba(255, 255, 255, 0.2);
          animation: pulse 2s infinite;
        }

        .slot-box {
          background: linear-gradient(135deg, 
            rgba(139, 0, 0, 0.3) 0%, 
            rgba(255, 0, 0, 0.15) 50%, 
            rgba(139, 0, 0, 0.3) 100%);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 0, 0, 0.4);
          border-radius: clamp(15px, 3vw, 20px);
          padding: clamp(1.5rem, 4vw, 2rem);
          position: relative;
          width: calc(50% - 2rem);
          box-shadow: 
            0 8px 32px rgba(255, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .slot-box:hover {
          transform: translateY(-5px);
          box-shadow: 
            0 12px 40px rgba(255, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
        }

        .slot-box::after {
          content: '';
          position: absolute;
          top: 10px;
          right: 10px;
          width: clamp(15px, 3vw, 20px);
          height: clamp(15px, 3vw, 20px);
          border-top: 2px solid #ff0000;
          border-right: 2px solid #ff0000;
          opacity: 0.7;
        }

        .slot-left {
          left: 0;
        }

        .slot-right {
          right: 0;
        }

        @media (max-width: 768px) {
          .timeline-line {
            left: 2rem;
          }

          .timeline-middle-vertical {
            left: 2rem;
          }

          .slot-box {
            width: calc(100% - 5rem);
            left: 5rem !important;
            right: auto !important;
          }

          .day-heading {
            margin-left: 5rem;
            text-align: left;
          }
        }

        @media (max-width: 480px) {
          .timeline-line {
            left: 1.5rem;
          }

          .timeline-middle-vertical {
            left: 1.5rem;
            width: 3rem;
            height: 3rem;
          }

          .slot-box {
            width: calc(100% - 4rem);
            left: 4rem !important;
            padding: 1.5rem;
          }

          .day-heading {
            margin-left: 4rem;
            font-size: clamp(1.2rem, 5vw, 2rem);
          }
        }
      `}</style>
      
      <div className="w-full max-w-none px-4 md:px-8 py-8">
        <h2 className="timeline-heading">Timeline</h2>
        
        {isLargeScreen ? (
          // Horizontal timeline for large screens using DaisyUI structure
          <div className="timeline-horizontal-container">
          <ul className="timeline timeline-horizontal">
            <li>
              <div className="timeline-start">26th September<br/>Day 1</div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box">
                <div className="slot-title">Slot 1</div>
                <div className="slot-time">9:00 am to 12:30 pm</div>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start"></div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box">
                <div className="slot-title">Slot 2</div>
                <div className="slot-time">1:30pm to 5:00pm</div>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start day-two">27th September<br/>Day 2</div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box day-two">
                <div className="slot-title">Slot 1</div>
                <div className="slot-time">9:00 am to 12:30 pm</div>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start"></div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box day-two">
                <div className="slot-title">Slot 2</div>
                <div className="slot-time">1:30pm to 5:00pm</div>
              </div>
            </li>
          </ul>
        </div>
        ) : (
          // Vertical timeline for smaller screens (original code)
          <div className="timeline-container">
            <div className="timeline-line"></div>
            
            {/* Day 1 */}
            <div className="timeline-item">
              <div className="day-heading">26th September (Day 1)</div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-middle-vertical">
                <svg className="w-6 h-6 fill-white" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="slot-box slot-left">
                <div className="slot-title">Slot 1</div>
                <div className="slot-time">9:00 am to 12:30 pm</div>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-middle-vertical">
                <svg className="w-6 h-6 fill-white" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="slot-box slot-right">
                <div className="slot-title">Slot 2</div>
                <div className="slot-time">1:30pm to 5:00pm</div>
              </div>
            </div>
            
            {/* Day 2 */}
            <div className="timeline-item">
              <div className="day-heading">27th September (Day 2)</div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-middle-vertical">
                <svg className="w-6 h-6 fill-white" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="slot-box slot-left">
                <div className="slot-title">Slot 1</div>
                <div className="slot-time">9:00 am to 12:30 pm</div>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-middle-vertical">
                <svg className="w-6 h-6 fill-white" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="slot-box slot-right">
                <div className="slot-title">Slot 2</div>
                <div className="slot-time">1:30pm to 5:00pm</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}