import type { Configuration } from 'lint-staged'
import path from 'node:path'
import process from 'node:process'

const prettier = (filenames: string[]) => {
    return filenames.map((filename) => {
        return [
            'prettier --write',
            '--config',
            path.join(process.cwd(), '.prettierrc'),
            filename
        ].join(' ')
    })
}

const eslint = (filenames: string[]) => {
    return filenames.map((filename) => {
        return [
            'eslint --fix',
            '--config',
            path.join(process.cwd(), 'eslint.config.mjs'),
            filename
        ].join(' ')
    })
}

export default {
    'src/**/*.(js|jsx|ts|tsx|json|css|scss)': [prettier, eslint],
    '.github/**/*.(yaml|yml)': [prettier],
    './*.(js|mjs|ts|json|jsonc|yaml|yml)': [prettier, eslint]
} satisfies Configuration
