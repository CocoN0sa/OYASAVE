const fs = require('fs');
const path = require('path');

const dir = 'C:/Users/USER/OneDrive/Documents/OYASAVE/src/Components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Strip common TS types
  content = content.replace(/export function meta\(\{([^}]*)\}: Route\.MetaArgs\)/g, 'export function meta({$1})');
  content = content.replace(/export function meta\(\{\}: Route\.MetaArgs\)/g, 'export function meta({})');
  content = content.replace(/const \[message, setMessage\] = useState<string \| null>\(null\);/g, 'const [message, setMessage] = useState(null);');
  content = content.replace(/const \[error, setError\] = useState<React\.ReactNode>\(null\);/g, 'const [error, setError] = useState(null);');
  content = content.replace(/const handleSubmit = \(e: React\.FormEvent\) =>/g, 'const handleSubmit = (e) =>');
  content = content.replace(/const formatTime = \(seconds: number\) =>/g, 'const formatTime = (seconds) =>');
  content = content.replace(/const handleOnboardingAction = \(type: "signin" \| "signup"\) =>/g, 'const handleOnboardingAction = (type) =>');
  content = content.replace(/import type \{.*\} from '.*';\n?/g, '');
  content = content.replace(/import type \{.*\} from ".*";\n?/g, '');

  fs.writeFileSync(filePath, content);
  console.log('Stripped types in ' + file);
}
