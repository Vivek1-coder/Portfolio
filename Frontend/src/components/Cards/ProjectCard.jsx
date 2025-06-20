'use client'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink } from 'lucide-react'

export default function ProjectCard({ project }) {
  const { image, name, description, skills, github, live } = project

  return (
    <Card
      className="w-full z-30 max-w-sm min-h-[570px] bg-gradient-to-br from-blue-800 via-purple-800 to-black/30 border border-zinc-800 shadow-md hover:shadow-2xl hover:border-zinc-700 transition-all duration-300 ease-in-out rounded-2xl overflow-hidden group"
    > 
      {/* Image with slight zoom effect */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <CardHeader>
        <div className='flex justify-between'>
        <Button
          asChild
          variant="outline"
          className="border-zinc-200 bg-transparent backdrop-blur-md text-white hover:text-blue-800 hover:border-blue-400 transition-colors"
        >
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Github size={16} />
            GitHub
          </a>
        </Button>

        {live && (
          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white transition-colors"
          >
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <ExternalLink size={16} />
              Live
            </a>
          </Button>
        )}
        </div>
        <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-200">
          {name}
        </h3>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-zinc-100 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              className="bg-zinc-800 text-white hover:bg-zinc-700 transition-all"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>

      
    </Card>
  )
}
