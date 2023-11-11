import { style } from '@vanilla-extract/css'

import { vars } from '../../styles/vars.css'

export const info = style({
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    backgroundImage: `radial-gradient(
        50% 80% at center bottom,
        ${vars.no3elementBackground} 0%,
        ${vars.no1appBackground} 100%
    )`,
    borderBottom: `1px solid ${vars.no6bordersNonInteractive}`,
    overflow: 'hidden',

    '@media': {
        'screen and (min-width: 1024px)': {
            position: 'fixed',
            top: 0,
            left: 0,
            bottom: 0,
            right: 'calc(max(2rem, 50% - 38rem) + 40rem)',
            padding: '0 0 0 max(4rem, calc(50% - 38rem))',
            alignItems: 'center',
            backgroundImage: `radial-gradient(
                50% 80% at center right,
                ${vars.no3elementBackground} 0%,
                ${vars.no1appBackground} 100%
            )`,
            borderRight: `1px solid ${vars.no6bordersNonInteractive}`,
            borderBottom: 'none'
        }
    }
})

export const infoContent = style({
    width: '32rem',
    minHeight: '100vh',
    position: 'relative',
    padding: '5rem 1.5rem 0',
    margin: '0 auto',

    '@media': {
        'screen and (min-width: 1024px)': {
            width: '24rem',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'center',
            padding: 0,
            margin: 0
        }
    }
})

export const subheading = style({
    fontStyle: 'italic',
    marginTop: '-1rem'
})
