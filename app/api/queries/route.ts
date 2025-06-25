import { NextRequest, NextResponse } from 'next/server'

const qaMap = new Map<string, string | string[]>([
      ['education', ['I graduated with a B.S. in Computer Science from the University of North Carolina - Charlotte.', 'My concentration was in cybersecurity but I also dabbled in software development.']],
      ['notable projects', ["I'm working on a few projects.", "One is a full stack web application called 'Message to the Void'. It's a simple web app that allows users to send and view messages with a TTL of 24hrs. MttV is built with React, Next.js, and MongoDB.", "The other is an Electron-React app called 'Forked'. It's a non-linear story-writing app inspired by TwineJS. It's built with React, Electron, and uses Electron's process model to to simulate a backend.", "Both can be found on my GitHub profile."]],
      ['work experience', ["At the time of the latest portfolio update: June 2025?", "Professional experience: no. Personal projects and unpaid projects: yes.", "The unpaid projects I work on typically consist of game development and the personal projects I work on are for practice, focused on web development."]],
      ['contact', ["You can find me on GitHub at https://github.com/v1-77a1n.", "I also have a LinkedIn profile at https://www.linkedin.com/in/clark-le-331aaa25a/.", "I don't usually use LinkedIn, so the best way to reach me is either through GitHub or email at clarke.le@outlook.com."]],
      ['skills', ["I'm a full stack dev - either front end or back end suits me fine. I do prefer back end, though.", "Out of the languages I've worked with, I'm most familiar with JavaScript, TypeScript, Python, and SQL. I've dabbled in Java and C++.", "When it comes to frameworks, I'm most comfortable with React, Next.js, Express, Electron. Got minimal experience with FastAPI.", "I'm always learning more, though. Check back again later."]],
      ['fun facts', ["I really like Dungeons & Dragons. Well, games and puzzles in general.", "I dabble in a bit of amateur writing.", "My top 3 video games of all time - Clair Obscur: Expedition 33, Cyberpunk: 2077, and Vampire the Masquerade: Bloodlines.", "I'm a sucker for good Indian food and ramen, instant or a fresh bowl.", "I really like the FX animation, Archer. I can re-watch that any time.", "My taste in music varies but I listen to a lot of R&B (old school and modern), alternative rock/metal, and pop.", "I'm always juggling at least 10 different personal projects: PC building, painting (badly), writing, home improvement, software, etc. In the end, the rest take a backseat if one of the ten is a software development project.", "Always been a night owl. My brain gets more in the zone at night."]]
])

export async function POST(request: NextRequest): Promise<NextResponse> {
      try {
            const req = await request.json()
            const query = req.query
            const answer = qaMap.get(query) as string | string[]

            if(query === 'fun facts') {
                  return NextResponse.json({ answer: answer[Math.floor(Math.random() * answer.length)]})
            }
            return NextResponse.json({ answer: answer })
      } catch(error) {
            console.log(error)
            return NextResponse.json({ answer: 'I need some time to think. Ask me again later.'})
      }
}