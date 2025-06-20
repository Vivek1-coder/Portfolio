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
      className="w-full max-w-sm min-h-[570px]  bg-transparent backdrop-blur-md border border-zinc-800 shadow-md hover:shadow-2xl hover:border-zinc-700 transition-all duration-300 ease-in-out rounded-2xl overflow-hidden group"
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
        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-200">
          {name}
        </h3>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-zinc-400 mb-4">{description}</p>
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

      <CardFooter className="absolute bottom-1  w-full flex justify-between items-end h-full mt-4 gap-2">
        <Button
          asChild
          variant="outline"
          className="border-zinc-700 bg-transparent backdrop-blur-md text-white hover:text-blue-800 hover:border-blue-400 transition-colors"
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
      </CardFooter>
    </Card>
  )
}
