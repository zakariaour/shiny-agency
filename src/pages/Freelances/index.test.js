import { rest } from 'msw'
import '@testing-library/jest-dom/extend-expect'
import { setupServer } from 'msw/node'
import { waitForElementToBeRemoved, screen } from '@testing-library/react'
import { render } from '../../utils/test'
import Freelances from './'

const freelancersMockedData = [
    {
        name: 'Harry Potter',
        job: 'Magicien frontend',
        picture: '',
    },
    {
        name: 'Hermione Granger',
        job: 'Magicienne fullstack',
        picture: '',
    },
]

const server = setupServer(
    rest.get('http://localhost:8000/freelances', (req, res, ctx) => {
        return res(ctx.json({ freelancersList: freelancersMockedData }))
    }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
