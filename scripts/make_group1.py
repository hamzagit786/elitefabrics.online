import json
import os

def render_article(a):
    item = "  {\n"
    item += f"    id: {json.dumps(a['slug'])},\n"
    item += f"    slug: {json.dumps(a['slug'])},\n"
    item += f"    title: {json.dumps(a['title'])},\n"
    item += f"    subtitle: {json.dumps(a['subtitle'])},\n"
    item += "    category: 'Fabric Types',\n"
    item += "    author: {\n"
    item += "      name: 'Elite Fabrics Editorial Staff',\n"
    item += "      role: 'Fiber Science & Textile Education',\n"
    item += "      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',\n"
    item += f"      credentials: {json.dumps(a.get('credentials', 'Textile research & standards evaluation'))}\n"
    item += "    },\n"
    item += "    publishDate: '2026-09-29',\n"
    item += "    updatedDate: '2026-09-29',\n"
    item += f"    readTime: {json.dumps(a['readTime'])},\n"
    item += f"    excerpt: {json.dumps(a['excerpt'])},\n"
    item += f"    seoTitle: {json.dumps(a['seoTitle'])},\n"
    item += f"    metaDescription: {json.dumps(a['metaDescription'])},\n"
    item += f"    featuredImage: {json.dumps(a['featuredImage'])},\n"
    item += f"    imageAlt: {json.dumps(a['imageAlt'])},\n"
    item += f"    imageCaption: {json.dumps(a['imageCaption'])},\n"
    item += f"    keyTakeaways: {json.dumps(a['keyTakeaways'], indent=6)},\n"
    item += f"    relatedFabrics: {json.dumps(a.get('relatedFabrics', []))},\n"
    item += f"    tableOfContents: {json.dumps(a['tableOfContents'], indent=6)},\n"
    safe_html = a['contentHtml'].replace("`", "\\`").replace("${", "\\${")
    item += f"    contentHtml: `{safe_html}`,\n"
    item += f"    tags: {json.dumps(a['tags'])},\n"
    item += f"    sources: {json.dumps(a.get('sources', []), indent=6)},\n"
    item += f"    relatedSlugs: {json.dumps(a.get('relatedSlugs', []))},\n"
    item += f"    faqs: {json.dumps(a.get('faqs', []), indent=6)}\n"
    item += "  }"
    return item

print("make_group1.py ready")
