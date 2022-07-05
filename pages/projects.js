import { layout } from '@chakra-ui/react';
import Link from 'next/link';
import Navbar from '../components/navbar';

const Projects = () => (
    <layout>
        <Navbar>
            <Link href="/">
            <a>Back to home</a>
            </Link>
        </Navbar>
    </layout>

)

export default Projects