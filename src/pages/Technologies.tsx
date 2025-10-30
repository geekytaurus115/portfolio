import { motion } from 'framer-motion';
import { useState } from 'react';
import './technologies.css';

type Category = 'All' | 'AI & ML' | 'Programming Languages' | 'Databases' | 'DevOps' | 'Other Tools';

interface Technology {
  name: string;
  category: Category;
}

// Public logo sources (devicon/simpleicons)
const logoMap: Record<string, string> = {
  // AI & ML and Ecosystem
  'Generative AI': 'https://cdn.simpleicons.org/openai/74C0FC',
  'Machine Learning': 'https://cdn.simpleicons.org/google/74C0FC',
  'Natural Language Processing (NLP)': 'https://cdn.simpleicons.org/openai/74C0FC',
  'Llama - LLM': 'https://cdn.simpleicons.org/meta/74C0FC',
  'GPT (OpenAI)': 'https://cdn.simpleicons.org/openai/74C0FC',
  'LangChain': 'https://cdn.simpleicons.org/langchain/74C0FC',
  'RAG (Retrieval-Augmented Generation)': 'https://cdn.simpleicons.org/huggingface/74C0FC',
  'Agentic AI': 'https://cdn.simpleicons.org/huggingface/74C0FC',
  'Prompt Engineering': 'https://cdn.simpleicons.org/openai/74C0FC',
  'Vector Embeddings': 'https://cdn.simpleicons.org/numba/74C0FC',
  'Semantic Search': 'https://cdn.simpleicons.org/algolia/74C0FC',
  'Context Grounding': 'https://cdn.simpleicons.org/huggingface/74C0FC',
  PyTorch: 'https://cdn.simpleicons.org/pytorch/EE4C2C',
  Transformers: 'https://cdn.simpleicons.org/huggingface/F9D67A',
  'Scikit-Learn': 'https://cdn.simpleicons.org/scikitlearn/F7931E',

  // Programming Languages
  Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  Golang: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
  SQL: 'https://cdn.simpleicons.org/sqlite/74C0FC',

  // Databases
  PostgreSQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  MySQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  MongoDB: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  DynamoDB: 'https://cdn.simpleicons.org/amazondynamodb/4053D6/fff',

  // DevOps / Cloud
  'AWS Lambda': 'https://cdn.simpleicons.org/awslambda/FF9900/fff',
  S3: 'https://cdn.simpleicons.org/amazons3/569A31/fff',
  'API Gateway': 'https://cdn.simpleicons.org/amazonapigateway/FF4F8B/fff',
  CloudWatch: 'https://cdn.simpleicons.org/amazoncloudwatch/FF4F8B/fff',
  SNS: 'https://cdn.simpleicons.org/amazonaws/FF9900/fff',
  SQS: 'https://cdn.simpleicons.org/amazonsqs/FF9900/fff',
  Docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  Jenkins: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
  'Git & Github': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  Bitbucket: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg',

  // Data / Python Stack
  Boto3: 'https://cdn.simpleicons.org/amazonaws/FF9900/fff',
  Numpy: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
  Pandas: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
  Matplotlib: 'https://cdn.simpleicons.org/matplotlib/11557C/fff',
  Seaborn: 'https://cdn.simpleicons.org/python/3776AB/fff',
  'Beautiful Soup': 'https://cdn.simpleicons.org/python/3776AB/fff',
  Jinja: 'https://cdn.simpleicons.org/jinja/B41717/fff',
  PySpark: 'https://cdn.simpleicons.org/apachespark/E25A1C/fff',
  Databricks: 'https://cdn.simpleicons.org/databricks/FF3621/fff',

  // Tools
  JIRA: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
  'Jupyter Lab': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg',
  'Jupyter Notebook': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg',
  Postman: 'https://cdn.simpleicons.org/postman/FF6C37/fff',
  Swagger: 'https://cdn.simpleicons.org/swagger/85EA2D/fff',
  DBeaver: 'https://cdn.simpleicons.org/dbeaver/372923/fff',
  pgAdmin: 'https://cdn.simpleicons.org/postgresql/4169E1/fff',
  SendGrid: 'https://cdn.simpleicons.org/sendgrid/1A82E2/fff',
  Excel: 'https://cdn.simpleicons.org/microsoftexcel/217346/fff',
};

const technologies: Technology[] = [
  // AI & ML
  { name: 'Python', category: 'Programming Languages' },
  { name: 'Generative AI', category: 'AI & ML' },
  { name: 'Machine Learning', category: 'AI & ML' },
  { name: 'Natural Language Processing (NLP)', category: 'AI & ML' },
  { name: 'Llama - LLM', category: 'AI & ML' },
  { name: 'GPT (OpenAI)', category: 'AI & ML' },
  { name: 'LangChain', category: 'AI & ML' },
  { name: 'RAG (Retrieval-Augmented Generation)', category: 'AI & ML' },
  { name: 'Agentic AI', category: 'AI & ML' },
  { name: 'Prompt Engineering', category: 'AI & ML' },
  { name: 'Vector Embeddings', category: 'AI & ML' },
  { name: 'Semantic Search', category: 'AI & ML' },
  { name: 'Context Grounding', category: 'AI & ML' },
  { name: 'PyTorch', category: 'AI & ML' },
  { name: 'Transformers', category: 'AI & ML' },
  { name: 'Scikit-Learn', category: 'AI & ML' },
  
  // Programming Languages
  { name: 'Golang', category: 'Programming Languages' },
  { name: 'SQL', category: 'Programming Languages' },
  
  // Databases
  { name: 'PostgreSQL', category: 'Databases' },
  { name: 'MySQL', category: 'Databases' },
  { name: 'MongoDB', category: 'Databases' },
  { name: 'DynamoDB', category: 'Databases' },
  
  // DevOps
  { name: 'AWS Lambda', category: 'DevOps' },
  { name: 'S3', category: 'DevOps' },
  { name: 'API Gateway', category: 'DevOps' },
  { name: 'CloudWatch', category: 'DevOps' },
  { name: 'SNS', category: 'DevOps' },
  { name: 'SQS', category: 'DevOps' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Jenkins', category: 'DevOps' },
  { name: 'Git & Github', category: 'DevOps' },
  { name: 'Bitbucket', category: 'DevOps' },
  
  // Other Tools
  { name: 'Boto3', category: 'Other Tools' },
  { name: 'Numpy', category: 'Other Tools' },
  { name: 'Pandas', category: 'Other Tools' },
  { name: 'Matplotlib', category: 'Other Tools' },
  { name: 'Seaborn', category: 'Other Tools' },
  { name: 'Beautiful Soup', category: 'Other Tools' },
  { name: 'Jinja', category: 'Other Tools' },
  { name: 'PySpark', category: 'Other Tools' },
  { name: 'Databricks', category: 'Other Tools' },
  { name: 'JIRA', category: 'Other Tools' },
  { name: 'Jupyter Lab', category: 'Other Tools' },
  { name: 'Jupyter Notebook', category: 'Other Tools' },
  { name: 'Postman', category: 'Other Tools' },
  { name: 'Swagger', category: 'Other Tools' },
  { name: 'DBeaver', category: 'Other Tools' },
  { name: 'pgAdmin', category: 'Other Tools' },
  { name: 'SendGrid', category: 'Other Tools' },
  { name: 'Excel', category: 'Other Tools' },
];

const categories: Category[] = ['All', 'AI & ML', 'Programming Languages', 'Databases', 'DevOps', 'Other Tools'];

export default function Technologies() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredTechnologies = (activeCategory === 'All' 
    ? technologies 
    : technologies.filter(tech => tech.category === activeCategory)
  ).sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="technologies-page">
      <motion.div
        className="tech-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.01 }}
      >
        <h1 className="tech-title">Technologies</h1>
        <p className="tech-subtitle">
          My tech stack and tools I work with
        </p>
      </motion.div>

      {/* Tabs */}
      <motion.div
        className="tech-tabs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.01, delay: 0.2 }}
      >
        {categories.map((category) => (
          <button
            key={category}
            className={`tech-tab ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Technologies Grid */}
      <div className="tech-grid">
        {filteredTechnologies.map((tech, index) => (
          <motion.div
            key={`${tech.name}-${index}`}
            className="tech-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            {logoMap[tech.name] ? (
              <img className="tech-logo" src={logoMap[tech.name]} alt={tech.name} />
            ) : (
              <span className="tech-icon">{tech.name.substring(0, 2)}</span>
            )}
            <p className="tech-name">{tech.name}</p>
            <span className="tech-category-badge">{tech.category}</span>
          </motion.div>
        ))}
      </div>

      {/* Count Display */}
      <div className="tech-count">
        <p>Showing {filteredTechnologies.length} {activeCategory === 'All' ? 'technologies' : `in ${activeCategory}`}</p>
      </div>
    </div>
  );
}

