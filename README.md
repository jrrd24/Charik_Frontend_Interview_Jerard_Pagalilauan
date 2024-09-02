# Charik Frontend Developer Technical Test (Jerard Pagalilauan)

A recreation / redesign of the Charik Website made using ReactJS and Tailwind CSS <br/>
_Accomplished in 3 days (August 29 Evening to September 1 Evening)_

## Getting Started

### Installation

- Clone Repository
- Open Project
- Open charik-test-pagalilauan

```
 cd charik-test-pagalilauan
```

- Install NPM

```
npm install
```

- Start the App in dev

```
npm run dev
```

## Technologies Used

### Main Tech Stack

- React JS with Vite - using **Typescript**
- Tailwind CSS
- React Router - for routing
- Zustand - for state management

### Other Libraries Used

- Swiper JS - for carousel
- React Accordion - for accordion
- React Icons - for icons

## Some Notes

- Buttons / Links for setting up meetings with jimmy redirect to the actual website
- Links for the **Knowledge Base** and **SPF Tester** also redirect to their page in the actual website.
- Some of the data displayed in the website can be edited by accessing their respective JSON File in the **/data folder**
- For data such as the **Navbar Links**, **Footer Links**, **Annual Pricing Discount**, etc.., they can be edited in the **/lib/defaults.tsx file**

## Features

### Navbar

A slightly improved navbar based on the original. It includes the ff:

- A thinner navbar for a more sleek look
- Underline Animations added to the different nav links on hover
- Nav links are also highlighted depending on the current page
- Search feature is NOT implemented ( unable to implement due to lack of time )
- Demo button redirects to the original website link ( unable to recreate due to lack of time )
- Fully responsive - becomes an accordion in mobile devices
- Added drop down animation for mobile navbar menu

### Footer

A recreation of the original Footer. It includes the ff:

- About section
- Social Media Links which can be edited in its JSON file
- Shortcut Links (some redirect to actual website, some redirect to their recreated page)
- Copyright with dynamic changing year
- Terms & Conditions, Privacy Policy and support email links

### Monthly / Annual Discount in Pricing

Dynamically changes the price of the Single User option depending on the selected mode.

- The computation for the annual discount is based on the set discount amount in the lib/defaults.tsx and the set monthly fee for the pricing package

## Pages

### Homepage

The homepage includes the ff:

- Redesigned hero section
- Redesigned Key Features Section
- Recreation of the demo, testimonials, and sales intelligence blog sections.

### Charik / Software

This page includes the ff:

- Redesigned hero section
- Imported Key Features and Need a Demo Section Components

### Charik / Email Finder

This page includes the ff:

- Redesigned hero section
- Made The Email-Finder have a green theme for distinction
- Redesigned the product features section
- Recreated the partners and book a demo sections.

### Charik / Company Search

This page is same as the email finder but has a blue theme to differenciate from Email Finder.

### Pricing

This page includes the ff:

- A Cleaner design for the pricing options section
- Dynamic selection for monthly / annual discount
- Added Orange and Green themes to differentiate the 2 pricing options
- Recreated the accordion section
- Imported Key Features, Need a Demo, and Partners Section Components

### About

This page includes the ff:

- A Recreation of the original hero section with few adjustments
- Unable to recreate Timeline ( unable to recreate due to lack of time )
- Recreated Become A Partner Section

### Resources / Insights

This page includes the ff:

- Recreated Hero/ Quote section
- Recreated Search and Filter options' designs
- Imported Previously created Blog Container for Blogs List
- The blogs can be edited at the data folder

## Folder Structure Overview

- /Components - contains components used in multiple pages
- /data - contains JSON files for data used in the app
- /lib/stores - contains Zustand hooks for global state management
- /lib/utils - contains utility files
- /lib - contains defaults and the router (for the different routes)
- /pages - contains all pages in the web app (each page has its own folder which contains the page, page components, and sections)
