# Pet Rescue Platform

A modern web application built with Next.js that connects loving homes with pets in need of rescue.

## Features

- Browse available pets for adoption
- User profiles for both adopters and rescuers
- Easy adoption request process
- Responsive design for all devices
- Modern UI components built with Tailwind CSS

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **UI Components:** Custom components with modern design
- **Animations:** Custom animations and transitions
- **Type Safety:** TypeScript

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/pet-rescue-platform.git
```

2. Install dependencies:
```bash
cd pet-rescue-platform
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
pet-rescue-platform/
├── public/              # Static files
├── src/
│   ├── app/            # App router pages
│   ├── components/     # React components
│   │   ├── ui/        # Reusable UI components
│   │   └── shared/    # Shared components (header, footer)
│   └── styles/        # Global styles
├── tailwind.config.js  # Tailwind CSS configuration
└── next.config.js     # Next.js configuration
```

## Available Scripts

- `npm run dev` - Run development server
- `npm run build` - Build production version
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## UI Components

The project includes several reusable UI components:

- Button
- Card
- Input
- Textarea
- Select
- Label
- Avatar
- Badge
- Tabs
- Dialog
- Slider
- Switch
- Toast

## Pages

- `/` - Homepage with featured pets and platform overview
- `/adopt` - Browse available pets
- `/about` - About the platform
- `/profile/adopter` - Adopter profile page
- `/profile/rescuer` - Rescuer profile page
- `/adoption-request` - Adoption request form

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
