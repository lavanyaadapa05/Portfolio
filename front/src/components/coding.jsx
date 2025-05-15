import React from 'react'
import NeonBackground from './ui/neonbackground';
const Coding = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <NeonBackground />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[90%] max-w-3xl p-10 rounded-3xl bg-white/10 backdrop-blur-lg shadow-2xl border border-white/20 text-white">
        <h2
          className="text-4xl font-bold mb-4 text-center"
          style={{
            textShadow:
              "0 0 5px #888888, 0 0 10px #aaaaaa, 0 0 20px #cccccc",
            color: "#cccccc",
          }}
        >
          Coding Profiles
        </h2>

        <p
          className="text-lg mb-6 text-center"
          style={{
            color: "#aaaaaa",
            textShadow: "0 0 3px #888888, 0 0 6px #cccccc",
          }}
        >
          Here are some of my competitive programming profiles.
        </p>

        <ul className="space-y-4 text-lg text-center">
          <li>
            <a
              href="https://leetcode.com/u/Lavanyaadapa/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              style={{
                color: "#cccccc",
                textShadow: "0 0 3px #aaaaaa, 0 0 6px #ffffff",
              }}
            >
              LeetCode
            </a>
          </li>
          <li>
            <a
              href="https://www.codechef.com/users/lavanyaadapa05"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              style={{
                color: "#cccccc",
                textShadow: "0 0 3px #aaaaaa, 0 0 6px #ffffff",
              }}
            >
              CodeChef
            </a>
          </li>
          <li>
            <a
              href="https://www.hackerrank.com/profile/Lavanya_adapa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              style={{
                color: "#cccccc",
                textShadow: "0 0 3px #aaaaaa, 0 0 6px #ffffff",
              }}
            >
              HackerRank
            </a>
          </li>
          <li>
            <a
              href="https://codeforces.com/profile/Lavanyaadapa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              style={{
                color: "#cccccc",
                textShadow: "0 0 3px #aaaaaa, 0 0 6px #ffffff",
              }}
            >
              Codeforces
            </a>
          </li>
          <li>
            <a
              href="https://www.interviewbit.com/profile/lavanya-adapa_05/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              style={{
                color: "#cccccc",
                textShadow: "0 0 3px #aaaaaa, 0 0 6px #ffffff",
              }}
            >
              InterviewBit
            </a>
          </li>
          
          
        </ul>
      </div>
    </div>
  )
}

export default Coding
