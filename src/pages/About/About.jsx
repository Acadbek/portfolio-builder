import { Box, Button, Container, Divider, Typography } from '@mui/material'
import React from 'react'
import classNames from 'classnames/bind'
import styles from './About.module.scss'
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import StarRateIcon from '@mui/icons-material/StarRate';
import { FaProductHunt } from "react-icons/fa";

const cn = classNames.bind(styles)

export const About = () => {
  return (
      <Container className={cn('about-container')} maxWidth='lg'>
        <Box className={cn('about-header')}>
            <Typography className={cn('about-header__title')}>
                Why We Created FlowCV
            </Typography>
            <Typography className={cn('about-header__desc')}>
               Writing a resume shouldn't be frustrating. Yet most people still use Word or Google Docs, losing hours to formatting issues and design struggles. Meanwhile, free apps and AI have made many everyday tasks easier — so why is resume creation still stuck in the past?
            </Typography>
            <Typography className={cn('about-header__desc')}>
                That's why we built <span className={cn('bold')}>FlowCV — a free, easy-to-use online resume builder.</span> <br />
                Our goal: to create a fast, intuitive tool that's actually enjoyable to use. You focus on the content — we handle structure, layout, and design.
            </Typography>
            <Typography className={cn('about-header__built')}>
              Built by a Small, Independent Team
            </Typography>
            <Typography className={cn('about-header__desc')}>
              We're not backed by investors or driven by maximizing returns. We're a small, quality-oriented team with a user-first approach, committed to building the <br /><span className={cn('bold')}>best truly free resume builder</span>, for everyone, everywhere.
            </Typography>
            <Typography className={cn('about-header__team')}>
              <span>👉</span>
              <span className={cn('team__desc')}> <span className={cn('bold')}>No paywalls, no watermarks, no surprises</span> when <br /> downloading your resume</span>
            </Typography>
            <Typography className={cn('about-header__team-2')}>
              <span>👉</span>
              <span className={cn('team__desc')}> <span className={cn('bold')}>Your first resume is free forever</span>, with full access to <br /> all design features</span>
            </Typography>
            <Typography className={cn('about-header__team-2')}>
              <span>👉</span>
             <span className={cn('team__desc')}> You only pay if you want to manage multiple versions or <br /> unlock advanced AI features</span>
            </Typography>
            <Typography className={cn('about-header__desc-2')}>
              We built FlowCV to support your career success — not to maximize profit.
            </Typography>
            <Typography className={cn('about-header__built')}>
              Why FlowCV Is Different
            </Typography>
            <Typography className={cn('about-header__desc')}>
              Unlike multi-purpose design tools like Canva, Word, or Adobe, FlowCV is built specifically for <span className={cn('bold')}>resume creation</span> — not for presentations, posters, or <br /> marketing assets. That means:
            </Typography>
           <Box className={cn('about-means')}>
               <Typography className={cn('about-means__desc')}>
              <span>✅</span>
              <span className={cn('team__desc')}> Structured guidance so you know what to write</span>
            </Typography>
             <Typography className={cn('about-means__desc')}>
              <span>✅</span>
               <span className={cn('team__desc')}>Templates that follow recruiter best practices</span>
            </Typography>
             <Typography className={cn('about-means__desc')}>
              <span>✅</span>
              <span className={cn('team__desc')}> Full design control without sacrificing readability</span>
            </Typography>
             <Typography className={cn('about-means__desc')}>
              <span>✅</span>
               <span className={cn('team__desc')}>No design or tech skills required</span>
            </Typography>
           </Box>
            <Typography className={cn('about-header__desc-3')}>
              And unlike many so-called "free" resume tools, we don't block downloads, watermark your resume, or use misleading upselling tactics.
            </Typography>
            <Typography className={cn('about-header__desc-4')}>
              We're proud of our top user ratings — showing that people around the world value our honest, user-first approach:
            </Typography>
            <Box className={cn('about-rating')}>
              <Box className={cn('about-rating__top')}>
                 <Typography className={cn('top__title')}>
                    Top rated by our amazing users
                 </Typography>
                 <span>⭐⭐⭐⭐⭐</span>
              </Box>
              <Box className={cn('socials')}>
                <Box className={cn('social-box')}>
                  <FcGoogle />
                  <Link to='https://www.google.com/maps/place/FlowCV/@48.2202331,16.3796424,47666m/data=!3m2!1e3!4b1!4m6!3m5!1s0xa3f534006aabdc3f:0x949c7a14e71ad9f!8m2!3d48.2202331!4d16.3796424!16s%2Fg%2F11l6wk75c9?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D' className={cn('social-link')}>Google reviews (4,9)</Link>
                </Box>
                <Divider orientation="vertical" flexItem />
                <Box className={cn('social-box')}>
                  <StarRateIcon/>
                  <Link to='https://www.trustpilot.com/review/flowcv.com' className={cn('social-link')}>Trustpilot (4,9)</Link>
                </Box>
                <Divider orientation="vertical" flexItem />
                <Box className={cn('social-box')}>
                  <FaProductHunt/>
                  <Link to='https://www.producthunt.com/products/flowcv' className={cn('social-link')}>Product Hunt (4,9)</Link>
                </Box>
              </Box>
            </Box>
            <Typography className={cn('about-header__desc-3')}>
              With FlowCV, <span className={cn('bold')}>free means free</span> — no tricks, no traps.
            </Typography>
            <Typography className={cn('about-header__built')}>
                Let's Get Started
            </Typography>
            <Typography className={cn('about-started')}>
              We're here to help you land your next job with less stress and more confidence.
            </Typography>
            <Link to='https://app.flowcv.com/resumes'>
              <button className={cn('about-btn')}>
                <span className={cn('about-btn__hand')}>👉</span>
                <span className={cn('about-btn__title')}>Start Bulding Your Resume</span>
              </button>
            </Link>
            <Typography className={cn('italian-text')}>
              It's free, fast, and yours to keep.
            </Typography>
            <Typography className={cn('about-header__built')}>
              Interested in Partnering?
            </Typography>
            <Typography className={cn('about-header__desc')}>
              Are you a career coach, business influencer, job board, or platform looking to support job seekers? We're always open to meaningful collaborations.
            </Typography>
            <Typography className={cn('about-email')}>
              <span>📧</span>
              <span className={cn('about-email__title')}> <span className={cn('email-desc')}>Reach out to</span><a className={cn('email-link')} href="">contact@flowcv.com</a></span>
            </Typography>
            <Link to='https://flowcv.com/partners' className={cn('about-partners')}>→ Friends & Partners of FlowCV</Link>
        </Box>
    </Container>
  )
}