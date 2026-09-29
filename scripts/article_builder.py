import json

def build_fabric_type_article(data):
    name = data['name']
    keyword = f"What Is {name} Fabric"
    slug = data['slug']
    
    html = f"""
      <section id="definition">
        <h2 class="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C] mt-8 mb-4">1. {keyword} and Where Does It Come From?</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          <strong>{keyword}?</strong> At its simplest, {name.lower()} fabric is a {data['summary']}. Renowned for its {data['hallmark']}, {name.lower()} has served as a foundational material in world fashion, home decor, and functional clothing for centuries.
        </p>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          {data['history_text']}
        </p>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Today, {name.lower()} is appreciated because it provides {data['modern_benefit']}. When examining physical textile properties, {name.lower()} stands out for its unique fiber structure, which you can explore in detail through our interactive <a href="#fabric/{data['fabric_slug']}" class="text-[#9E472A] font-semibold underline hover:text-[#7A3620]">{name} Fabric Directory Profile</a>.
        </p>
      </section>

      <section id="manufacturing">
        <h2 class="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C] mt-8 mb-4">2. How {name} Fabric Is Made: From Raw Material to Loom</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          The journey of creating {name.lower()} fabric involves precise mechanical and chemical processing stages:
        </p>
        <ol class="list-decimal pl-6 space-y-3 text-[#3A3A3A] mb-6 leading-relaxed">
          {data['steps_html']}
        </ol>
      </section>

      <section id="properties">
        <h2 class="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C] mt-8 mb-4">3. Key Properties and Characteristics of {name}</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Why do garment makers and sewists choose {name.lower()}? Its physical characteristics provide distinct functional advantages:
        </p>
        <ul class="list-disc pl-6 space-y-2 text-[#3A3A3A] mb-6 leading-relaxed">
          {data['properties_html']}
        </ul>
      </section>

      <section id="varieties">
        <h2 class="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C] mt-8 mb-4">4. Popular Types and Varieties of {name} Fabric</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Depending on yarn thickness, twisting, and loom construction, {name.lower()} appears in several specialized formats:
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          {data['varieties_html']}
        </div>
      </section>

      <section id="comparison-table">
        <h2 class="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C] mt-8 mb-4">5. {name} Fabric Specifications and Comparison Table</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Here is how {name.lower()} compares across grades, weights, and typical apparel applications:
        </p>
        <div class="overflow-x-auto my-6">
          <table class="w-full text-left text-xs sm:text-sm border-collapse border border-[#E6E0D7] bg-white rounded-lg shadow-2xs">
            <thead>
              <tr class="bg-[#F5EFEB] border-b border-[#E6E0D7] text-[#1C1C1C]">
                {data['table_headers_html']}
              </tr>
            </thead>
            <tbody class="divide-y divide-[#E6E0D7] text-[#3E3A33]">
              {data['table_rows_html']}
            </tbody>
          </table>
        </div>
      </section>

      <section id="pros-cons">
        <h2 class="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C] mt-8 mb-4">6. Advantages and Disadvantages of {name} Fabric</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div class="p-4 bg-[#F7FDF8] border border-[#CDEACF] rounded-xl text-xs space-y-2">
            <h3 class="font-bold text-sm text-[#2E6B35]">Advantages of {name}</h3>
            <ul class="list-disc pl-4 space-y-1.5 text-[#3A4A3C]">
              {data['pros_html']}
            </ul>
          </div>
          <div class="p-4 bg-[#FDF7F7] border border-[#EACDCD] rounded-xl text-xs space-y-2">
            <h3 class="font-bold text-sm text-[#9E3535]">Disadvantages of {name}</h3>
            <ul class="list-disc pl-4 space-y-1.5 text-[#4A3A3A]">
              {data['cons_html']}
            </ul>
          </div>
        </div>
      </section>

      <section id="care-tips">
        <h2 class="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C] mt-8 mb-4">7. How to Care for and Launder {name} Garments</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Keep your {name.lower()} clothes looking beautiful with these simple laundering rules:
        </p>
        <ul class="list-disc pl-6 space-y-2 text-[#3A3A3A] mb-6 leading-relaxed">
          {data['care_html']}
        </ul>
      </section>

      <section id="conclusion">
        <h2 class="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C] mt-8 mb-4">8. Conclusion: Choosing {name} for Your Next Garment</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          In conclusion, understanding <strong>{keyword.lower()}</strong> helps you make better purchasing and sewing decisions. With its {data['conclusion_summary']}, {name.lower()} remains an essential textile in any well-curated wardrobe. Whether you are sewing custom clothing, buying ready-to-wear shirts, or styling home interiors, {name.lower()} delivers reliable quality and comfort.
        </p>
      </section>

      <section id="faqs">
        <h2 class="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C] mt-8 mb-4">9. Frequently Asked Questions</h2>
        <div class="space-y-4 text-xs sm:text-sm text-[#3E3A33]">
          {data['faqs_html']}
        </div>
      </section>

      <section class="mt-8 pt-6 border-t border-[#E6E0D7]">
        <h3 class="font-serif-heading font-bold text-lg text-[#1C1C1C] mb-3">Related Articles & Guides</h3>
        <ul class="flex flex-wrap gap-2 text-xs">
          {data['related_links_html']}
        </ul>
      </section>
    """

    return {
        "id": slug,
        "slug": slug,
        "title": data['title'],
        "subtitle": data['subtitle'],
        "category": "Fabric Types",
        "author": {
            "name": "Elite Fabrics Editorial Staff",
            "role": "Fiber Science & Textile Education",
            "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
            "credentials": data.get("credentials", "Textile standards and fiber research")
        },
        "publishDate": "2026-09-29",
        "updatedDate": "2026-09-29",
        "readTime": data.get("readTime", "9 min read"),
        "excerpt": data['excerpt'],
        "seoTitle": data['seoTitle'],
        "metaDescription": data['metaDescription'],
        "featuredImage": data['featuredImage'],
        "imageAlt": data['imageAlt'],
        "imageCaption": data['imageCaption'],
        "keyTakeaways": data['keyTakeaways'],
        "relatedFabrics": data['relatedFabrics'],
        "tableOfContents": [
            {"id": "definition", "title": f"1. {keyword} and Where Does It Come From?", "level": 2},
            {"id": "manufacturing", "title": f"2. How {name} Fabric Is Made: From Raw Material to Loom", "level": 2},
            {"id": "properties", "title": f"3. Key Properties and Characteristics of {name}", "level": 2},
            {"id": "varieties", "title": f"4. Popular Types and Varieties of {name} Fabric", "level": 2},
            {"id": "comparison-table", "title": f"5. {name} Fabric Specifications and Comparison Table", "level": 2},
            {"id": "pros-cons", "title": f"6. Advantages and Disadvantages of {name} Fabric", "level": 2},
            {"id": "care-tips", "title": f"7. How to Care for and Launder {name} Garments", "level": 2},
            {"id": "conclusion", "title": f"8. Conclusion: Choosing {name} for Your Next Garment", "level": 2},
            {"id": "faqs", "title": "9. Frequently Asked Questions", "level": 2}
        ],
        "contentHtml": html,
        "tags": data['tags'],
        "sources": data['sources'],
        "relatedSlugs": data['relatedSlugs'],
        "faqs": data['faqs']
    }

print("article_builder ready")
