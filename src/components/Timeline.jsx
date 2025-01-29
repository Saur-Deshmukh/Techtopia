"use client";
import React from "react";

export function Timeline() {
  const events = [
    {
      id: 1,
      time: "9:00 AM - 10:00 AM",
      title: "Breakfast and Registration",
    },
    {
      id: 2,
      time: "10:00 AM - 12:00 PM",
      title: "Keynote Speaker",
    },
    {
      id: 3,
      time: "12:00 PM - 1:00 PM",
      title: "Lunch Break",
    },
    {
      id: 4,
      time: "1:00 PM - 3:00 PM",
      title: "Panel Discussion",
    },
  ];

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#05001f",
      padding: "48px"
    }}>
      <div style={{
        textAlign: "center",
        marginBottom: "80px"
      }}>
        <h1 style={{
          fontSize: "3.5rem",
          fontWeight: "bold",
          background: "linear-gradient(135deg, #7C3AED, #EC4899)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>
          Techopia Day 1
        </h1>
      </div>

      <div style={{
        maxWidth: "800px",
        margin: "0 auto",
        position: "relative"
      }}>
        <div style={{
          position: "absolute",
          top: "-48px",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "1.125rem",
          fontWeight: "500",
          background: "linear-gradient(135deg, #7C3AED, #EC4899)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>
          Start
        </div>

        <div style={{
          position: "absolute",
          left: "50%",
          top: 0,
          bottom: 0,
          width: "2px",
          transform: "translateX(-50%)",
          background: "linear-gradient(180deg, #7C3AED, #EC4899)"
        }} />

        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "96px"
        }}>
          {events.map((event, index) => (
            <div
              key={event.id}
              style={{
                position: "relative",
                display: "flex",
                justifyContent: index % 2 === 0 ? "flex-end" : "flex-start",
                alignItems: "center"
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #7C3AED, #EC4899)",
                  boxShadow: "0 0 20px rgba(124, 58, 237, 0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#05001f"
                  }}
                />
              </div>

              <div
                style={{
                  width: "calc(50% - 48px)",
                  padding: "32px",
                  borderRadius: "16px",
                  border: "1px solid transparent",
                  background: "#05001f",
                  position: "relative",
                  transition: "transform 0.3s ease",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 0 30px rgba(124, 58, 237, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: "-1px",
                    borderRadius: "16px",
                    padding: "1px",
                    background: "linear-gradient(135deg, #7C3AED, #EC4899)",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    zIndex: -1
                  }}
                />
                <h3 style={{
                  color: "white",
                  fontSize: "1.5rem",
                  fontWeight: "500",
                  marginBottom: "12px"
                }}>
                  Event {event.id}
                </h3>
                <p style={{
                  color: "#D8B4FE",
                  fontWeight: "500",
                  marginBottom: "8px"
                }}>
                  {event.time}
                </p>
                <p style={{
                  color: "#E5E7EB",
                  fontSize: "1.125rem"
                }}>
                  {event.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;