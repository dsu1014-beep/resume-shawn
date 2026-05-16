const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(/\bblue-(50|100|200|300|400|500|600|700|800|900)\b/g, 'brand-$1');
content = content.replace(/\bslate-(50|100|200|300|400|500|600|700|800|900)\b/g, 'surface-$1');
content = content.replace('import { useState } from "react";', 'import { useState, useEffect } from "react";');

// Add theme toggler to the nav
const navItems = `<a href="#contact" className="hover:text-brand-600 transition-colors border-2 border-brand-600 px-4 py-1.5 rounded-full text-brand-600 hover:bg-brand-600 hover:text-white">聯繫我</a>`;
const themeSelector = `
            <div className="flex items-center gap-2 px-2 py-1 bg-surface-100/50 rounded-full border border-surface-200 ml-4 backdrop-blur-md">
              <button onClick={() => setTheme('default')} className={\`w-5 h-5 rounded-full bg-[#2563eb] border-2 shadow-[0_0_8px_rgba(37,99,235,0.4)] \${theme === 'default' ? 'border-surface-900 scale-110' : 'border-transparent hover:scale-110 opacity-70 hover:opacity-100'} transition-all\`} title="專業藍" />
              <button onClick={() => setTheme('theme-emerald')} className={\`w-5 h-5 rounded-full bg-[#059669] border-2 shadow-[0_0_8px_rgba(5,150,105,0.4)] \${theme === 'theme-emerald' ? 'border-surface-900 scale-110' : 'border-transparent hover:scale-110 opacity-70 hover:opacity-100'} transition-all\`} title="極簡綠" />
              <button onClick={() => setTheme('theme-orange')} className={\`w-5 h-5 rounded-full bg-[#ea580c] border-2 shadow-[0_0_8px_rgba(234,88,12,0.4)] \${theme === 'theme-orange' ? 'border-surface-900 scale-110' : 'border-transparent hover:scale-110 opacity-70 hover:opacity-100'} transition-all\`} title="創意橘" />
            </div>`;

content = content.replace(navItems, navItems + '\n' + themeSelector);
content = content.replace('className="flex gap-6 text-sm font-medium text-surface-600"', 'className="flex items-center gap-6 text-sm font-medium text-surface-600"');

// Add useEffect
const useStateLine = 'const [activeTab, setActiveTab] = useState(0);';
const effectLines = `
  const [activeTab, setActiveTab] = useState(0);
  const [theme, setTheme] = useState('default');

  useEffect(() => {
    document.documentElement.className = theme === 'default' ? '' : theme;
  }, [theme]);
`;

content = content.replace(useStateLine, effectLines);

fs.writeFileSync('src/App.tsx', content);
